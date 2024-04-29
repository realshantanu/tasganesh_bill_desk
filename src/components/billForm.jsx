import { useState, useEffect } from "react";
import PDFPopup from "./pdfPopup";

import axios from "axios";

export default function BillForm(props) {
  const isPaid = [
    { id: 1, name: "Paid" },
    { id: 2, name: "Unpaid" },
  ];

  const {
    vehicleNumber,
    setVehicleNumber,
    vehicleKm,
    setVehicleKm,
    nextKm,
    setNextKm,
    customer,
    setCustomer,
    address,
    setAddress,
    mobileNumber,
    setMobileNumber,
  } = props;

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [services, setServices] = useState([]);

  const [isItemUnitDropdownOpen, setIsItemUnitDropdownOpen] = useState(false);

  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectUnit, setSelectUnit] = useState(null);
  const [selectItemRate, setSelectItemRate] = useState(null);
  const [selectItemQuantity, setSelectItemQuantity] = useState(null);
  const [selectDiscountAmount, setSelectDiscountAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectPaid, setSelectPaid] = useState(null);
  const [isPaidDropdownOpen, setIsPaidDropdownOpen] = useState(false);

  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  const [billNumber, setBillNumber] = useState(null);
  const [serviceName, setServiceName] = useState([]);
  const [isPdfPopupOpen, setIsPdfPopupOpen] = useState(false); // Add this line

  useEffect(() => {
    axios
      .get(`https://tasganesh-backend.vercel.app/api/new/bill/number`)
      .then((response) => {
        console.log("Bill number:", response.data.new_bill_number);
        setBillNumber(response.data.new_bill_number);
      })
      .catch((error) => {
        console.error("Error fetching bill number:", error);
      });
  }, []);

  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  useEffect(() => {
    axios.get(`https://tasganesh-backend.vercel.app/api/service/names`).then((response) => {
      console.log("Service names:", response.data);
      setServiceName(response.data);
    });
  }, []);

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  const toggleisPaidDropdown = () => {
    setIsPaidDropdownOpen(!isPaidDropdownOpen);
  };

  const handleAddService = () => {
    if (
      !selectedService ||
      !selectUnit ||
      !selectItemRate ||
      !selectItemQuantity
    ) {
      alert("Please fill all the fields1");
      return;
    }
    const newService = {
      serviceName: selectedService,
      itemUnit: selectUnit,
      itemRate: selectItemRate,
      itemQuantity: selectItemQuantity,
    };
    setServices([...services, newService]);
    setTotalAmount(totalAmount + selectItemRate * selectItemQuantity);
  };

  const handleApplyDiscount = () => {
    setTotalAmount(parseFloat((totalAmount - selectDiscountAmount).toFixed(2)));
  };

  const handleGenerateBill = () => {
    console.log(services);
    if (
      !vehicleNumber ||
      !vehicleKm ||
      !nextKm ||
      !customer ||
      !address ||
      !mobileNumber ||
      !services.length ||
      !selectPaid
    ) {
      alert("Please fill all the fields2");
      return;
    }
    const selectPaidBool = selectPaid === "Paid";
    const billData = {
      billNumber,
      currentDate,
      vehicleNumber,
      vehicleKm,
      nextKm,
      customer,
      address,
      mobileNumber,
      services,
      totalAmount,
      selectPaidBool,
      selectDiscountAmount,
    };
    console.log("Bill data:", billData);
    axios
      .post(`https://tasganesh-backend.vercel.app/api/bill/create`, billData)
      .then((response) => {
        console.log("Bill created:", response.data);
        alert("Bill created successfully");
        setIsPdfPopupOpen(true);
      })
      .catch((error) => {
        console.error("Error creating bill:", error);
        alert("Error creating bill");
      });
  };

  return (
    <>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
      >
        <div class="flex flex-col space-y-1.5 p-6">
          <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
            Create bill
          </h3>
          <p class="text-sm text-muted-foreground">Enter the bill details.</p>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="bill-number"
                >
                  Bill number
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="bill-number"
                  placeholder="Bill number"
                  type="text"
                  value={billNumber}
                  disabled
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="bill-date"
                >
                  Bill date
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="bill-date"
                  placeholder="Bill date"
                  type="date"
                  value={currentDate}
                  readOnly
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="vehicle-number"
                >
                  Vehicle number
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="vehicle-number"
                  placeholder="Vehicle number"
                  value={vehicleNumber}
                  onChange={(e) => {
                    setVehicleNumber(e.target.value);
                  }}
                  onBlur={() => {
                    console.log("Vehicle Number:", vehicleNumber);
                  }}
                  required
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="vehicle-km"
                >
                  Vehicle km
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="vehicle-km"
                  placeholder="Vehicle km"
                  type="number"
                  value={vehicleKm}
                  onChange={(e) => {
                    setVehicleKm(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="next-km"
                >
                  Next km
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="next-km"
                  placeholder="Next km"
                  type="number"
                  value={nextKm}
                  onChange={(e) => {
                    setNextKm(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="customer"
              >
                Customer
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="customer"
                placeholder="Customer"
                value={customer}
                onChange={(e) => {
                  setCustomer(e.target.value);
                }}
                required
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="address"
              >
                Address
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="address"
                placeholder="Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="mobile-number"
              >
                Mobile number
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="mobile-number"
                placeholder="Mobile number"
                type="tel"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
                required
              />
            </div>
            <div class="space-y-2 relative">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="service-name"
              >
                Service Name
              </label>
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:r5m:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                data-placeholder=""
                class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="service-name"
                aria-label="Service Name"
                onClick={toggleServiceDropdown}
              >
                <span>{selectedService ? selectedService : "Select"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {isServiceDropdownOpen && (
                <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full mt-1">
                  <ul className="py-2 text-sm text-gray-700" id="dropdownMenu">
                    {serviceName.map((service) => (
                      <li key={service.id}>
                        <button
                          type="button"
                          className="block px-3 py-2 w-full hover:bg-gray-100 text-left"
                          onClick={() => {
                            // Handle selection of service here
                            console.log(
                              "Selected service:",
                              service.service_name
                            );
                            setSelectedService(service.service_name);
                            setSelectUnit(service.item_unit);
                            // You can close the dropdown after selection if needed
                            setIsServiceDropdownOpen(false);
                          }}
                        >
                          {service.service_name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div class="grid grid-cols-3 gap-4">
              <div class="space-y-2 relative">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="item-unit"
                >
                  Item unit
                </label>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r5m:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  data-placeholder=""
                  class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="item-unit"
                  aria-label="Item unit"
                  disabled
                >
                  <span>{selectUnit ? selectUnit : "Item Unit"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="item-rate"
                >
                  Item rate
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="item-rate"
                  placeholder="Item rate"
                  type="number"
                  value={selectItemRate}
                  onChange={(e) => setSelectItemRate(e.target.value)}
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="item-quantity"
                >
                  Item quantity
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="item-quantity"
                  placeholder="Item quantity"
                  type="number"
                  onChange={(e) => setSelectItemQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <button
                onClick={handleAddService}
                className="inline-flex items-center justify-center bg-indigo-500 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Add Service
              </button>
            </div>
            <div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sr. No.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item Unit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {services.map((service, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {service.serviceName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {service.itemUnit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {service.itemRate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {service.itemQuantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {service.itemRate * service.itemQuantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2 flex items-center">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="discount-amount"
                >
                  Discount Amount
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="discount-amount"
                  placeholder="Amount"
                  type="number"
                  value={selectDiscountAmount}
                  onChange={(e) => {
                    setSelectDiscountAmount(e.target.value);
                  }}
                />
              </div>
              <div class="space-y-2 flex items-center">
                <button
                  className="inline-flex items-center justify-center bg-indigo-500 rounded-md text-sm font-medium text-white h-10 px-4"
                  onClick={handleApplyDiscount}
                >
                  Apply Discount
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="amount"
              >
                Amount
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="amount"
                placeholder="Amount"
                type="number"
                value={totalAmount}
                disabled
              />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="space-y-2 relative">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="isPaid"
                >
                  isPaid
                </label>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r5m:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  data-placeholder=""
                  class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="isPaid"
                  aria-label="isPaid"
                  onClick={toggleisPaidDropdown}
                >
                  <span>{selectPaid ? selectPaid : "Select"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                {isPaidDropdownOpen && (
                  <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full mt-1">
                    <ul
                      className="py-2 text-sm text-gray-700"
                      id="dropdownMenu"
                    >
                      {isPaid.map((item) => (
                        <li key={item.id}>
                          <button
                            type="button"
                            className="block px-3 py-2 w-full hover:bg-gray-100 text-left"
                            onClick={() => {
                              // Handle selection of service here
                              console.log("Selected service:", item.name);
                              setSelectPaid(item.name);
                              // You can close the dropdown after selection if needed
                              setIsPaidDropdownOpen(false);
                            }}
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center p-6">
          <button
            class="inline-flex items-center justify-center bg-indigo-500 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            onClick={handleGenerateBill}
          >
            Generate Bill
          </button>
        </div>
      </div>

      {isPdfPopupOpen && (
        <div className="fixed inset-0 flex items-start justify-center z-50 overflow-auto pt-10">
          <div className="bg-white p-4 rounded shadow-lg max-w-2xl mx-auto overflow-auto">
            <PDFPopup
              bill_number={billNumber}
              setIsPdfPopupOpen={setIsPdfPopupOpen} // Pass callback to close popup
              isPdfPopupOpen={isPdfPopupOpen}
            />
          </div>
        </div>
      )}
    </>
  );
}
