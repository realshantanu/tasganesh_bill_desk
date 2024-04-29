import React, { useState, useEffect } from "react";
import axios from "axios";
import PDFPopup from "../components/pdfPopup";

export default function DailyReportDashboard() {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  const [totalServices, setTotalServices] = useState(0);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [totalBills, setTotalBills] = useState(0);
  const [billsPaid, setBillsPaid] = useState(0);
  const [billsUnpaid, setBillsUnpaid] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [todaysBillsDetails, setTodaysBillsDetails] = useState([]);
  const [servicesChange, setServicesChange] = useState(0);
  const [vehiclesChange, setVehiclesChange] = useState(0);
  const [billsChange, setBillsChange] = useState(0);
  const [paidBillsChange, setPaidBillsChange] = useState(0);
  const [unpaidBillsChange, setUnpaidBillsChange] = useState(0);
  const [earningsChange, setEarningsChange] = useState(0);

  const [selectedBill, setSelectedBill] = useState(null);
  const [isPdfPopupOpen, setIsPdfPopupOpen] = useState(false); // Add this line

  const [searchQuery, setSearchQuery] = useState("");

  const filteredBills = searchQuery
    ? todaysBillsDetails.filter((bill) =>
        bill.vehicle_number.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : todaysBillsDetails;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBills.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(todaysBillsDetails.length / itemsPerPage);

  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  useEffect(() => {
    if (currentDate) {
      getReportData();
    }
  }, [currentDate]);

  const getReportData = () => {
    const url = `https://tasganesh-backend.vercel.app/report/daily?date=${currentDate}`;
    axios
      .get(url)
      .then((response) => {
        setTotalServices(response.data.total_services);
        setTotalVehicles(response.data.total_vehicles);
        setTotalBills(response.data.total_bills);
        setBillsPaid(response.data.bills_paid);
        setBillsUnpaid(response.data.bills_unpaid);
        setTotalEarnings(response.data.total_earnings);
        setTodaysBillsDetails(response.data.todays_bills_details);
        setServicesChange(response.data.services_change);
        setVehiclesChange(response.data.vehicles_change);
        setBillsChange(response.data.bills_change);
        setPaidBillsChange(response.data.paid_bills_change);
        setUnpaidBillsChange(response.data.unpaid_bills_change);
        setEarningsChange(response.data.earnings_change);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {}, [selectedBill]);

  const handlePopupPDF = (billNumber) => {
    setSelectedBill(billNumber);
    setIsPdfPopupOpen(true);
  };

  return (
    <>
      {isPdfPopupOpen && (
        <div className="fixed inset-0 flex items-start justify-center z-50 overflow-auto pt-10">
          <div className="bg-white p-4 rounded shadow-lg max-w-2xl mx-auto overflow-auto">
            <PDFPopup
              bill_number={selectedBill}
              setIsPdfPopupOpen={setIsPdfPopupOpen} // Pass callback to close popup
              isPdfPopupOpen={isPdfPopupOpen}
            />
          </div>
        </div>
      )}
      <div class="flex flex-col w-full min-h-screen">
        <header class="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
          <div class="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
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
              onChange={(e) => {
                setCurrentDate(e.target.value);
                console.log(e.target.value);
              }}
            />
            <form class="flex-1 ml-auto sm:flex-initial">
              <div class="relative">
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
                  class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  placeholder="Search products..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
        </header>
        <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div class="grid md:grid-cols-3 gap-4">
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  Total Services Provided
                </h3>
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
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div class="p-6">
                <div class="text-2xl font-bold">{totalServices}</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {servicesChange}% from last day
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  Total Vehicles Visited
                </h3>
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
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div class="p-6">
                <div class="text-2xl font-bold">{totalVehicles}</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {vehiclesChange}% from last day
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  Total Bills
                </h3>
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
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
              <div class="p-6">
                <div class="text-2xl font-bold">{totalBills}</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {billsChange}% from last day
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  Bills Paid
                </h3>
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
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="p-6">
                <div class="text-2xl font-bold">{billsPaid}</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {paidBillsChange} since last day
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  Bills Unpaid
                </h3>
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
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="p-6">
                <div class="text-2xl font-bold">{billsUnpaid}</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {unpaidBillsChange} since last day
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  Total Earnings (INR)
                </h3>
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
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div class="p-6">
                <div class="text-2xl font-bold">₹{totalEarnings}</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {earningsChange}% from last day
                </p>
              </div>
            </div>
          </div>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
              <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                Todays Bills
              </h3>
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
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div class="p-0">
              <div class="relative w-full overflow-auto">
                <table class="w-full caption-bottom text-sm">
                  <thead class="[&amp;_tr]:border-b">
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                        Bill #
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Customer
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Amount
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Status
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                        Open Bill
                      </th>
                    </tr>
                  </thead>
                  <tbody class="[&amp;_tr:last-child]:border-0">
                    {currentItems.map((bill) => (
                      <tr
                        key={bill.bill_no}
                        class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                          {bill.bill_no}
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          {bill.customer}
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          ₹{bill.amount}
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          {bill.status}
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center w-[100px]">
                          <button
                            onClick={() => handlePopupPDF(bill.bill_no)}
                            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                          >
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
                              class="h-4 w-4"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" x2="21" y1="14" y2="3"></line>
                            </svg>
                            <span class="sr-only">Open</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <nav aria-label="Pagination">
                    <ul className="flex items-center -space-x-px h-10 text-base">
                      <li>
                        <button
                          onClick={() =>
                            setCurrentPage(
                              currentPage > 1 ? currentPage - 1 : currentPage
                            )
                          }
                          className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                          <span className="sr-only">Previous</span>
                          <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#374151"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#374151"
                                stroke-width="2"
                                points="7 2 17 12 7 22"
                                transform="matrix(-1 0 0 1 24 0)"
                              ></polyline>{" "}
                            </g>
                          </svg>
                        </button>
                      </li>
                      {[...Array(totalPages)].map((e, i) => (
                        <li key={i}>
                          <button
                            onClick={() => setCurrentPage(i + 1)}
                            className={`flex items-center justify-center px-4 h-10 leading-tight ${
                              i + 1 === currentPage
                                ? "text-blue-600 border border-blue-300 bg-blue-50"
                                : "text-gray-500 bg-white border border-gray-300"
                            } hover:bg-gray-100 hover:text-gray-700`}
                          >
                            {i + 1}
                          </button>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={() =>
                            setCurrentPage(
                              currentPage < totalPages
                                ? currentPage + 1
                                : currentPage
                            )
                          }
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                          <span className="sr-only">Next</span>
                          <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#374151"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#374151"
                                stroke-width="2"
                                points="7 2 17 12 7 22"
                              ></polyline>{" "}
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
