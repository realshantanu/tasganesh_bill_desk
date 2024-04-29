import axios from "axios";
import React, { useState, useEffect } from "react";
import { toWords } from "number-to-words";

export default function PDFPopup(props) {
  const { bill_number, setIsPdfPopupOpen } = props;

  const [billNumber, setBillNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [vehicleKm, setVehicleKm] = useState(0);
  const [billDate, setBillDate] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [toVehicleKm, setToVehicleKm] = useState(0);
  const [particular, setParticular] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const totalInWords = toWords(totalAmount);

  const handleClosePopup = () => {
    setIsPdfPopupOpen(false);
  };

  useEffect(() => {
    getBillDetails();
  }, []);
  const getBillDetails = () => {
    axios
      .get(`https://tasganesh-backend.vercel.app/api/bill/${bill_number}`)
      .then((response) => {
        console.log(response.data);
        setBillDate(response.data.currentDate);
        setBillNumber(response.data.billNumber);
        setCustomerName(response.data.customer);
        setDiscount(response.data.selectDiscountAmount);
        setMobileNo(response.data.mobileNumber);
        setParticular(response.data.services);
        setToVehicleKm(response.data.nextKm);
        setTotalAmount(response.data.totalAmount);
        setVehicleKm(response.data.vehicleKm);
        setVehicleNumber(response.data.vehicleNumber);
        setIsPaid(response.data.selectPaidBool);
      });
  };

  const handlePrint = () => {
    const printContents =
      document.getElementById("pdf-popup-content").innerHTML;

    const styles = [...document.styleSheets]
      .map((styleSheet) => {
        try {
          return [...styleSheet.cssRules]
            .map((rule) => rule.cssText)
            .join("\n");
        } catch (e) {
          console.error(e);
          return "";
        }
      })
      .join("\n");

    const printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            ${styles}
            .exclude-from-print { display: none; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handlePaid = () => {
    axios
      .put(`https://tasganesh-backend.vercel.app/api/bill/update/${billNumber}`)
      .then((response) => {
        console.log(response.data);
        alert("Bill Paid Successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error in paying bill");
      });
  };

  return (
    <>
      <div
        id="pdf-popup-content"
        className="rounded-lg border text-card-foreground w-full max-w-2xl p-8 bg-white shadow-lg"
        data-v0-t="card"
      >
        <div className="text-center pb-4">
          <h1 className="text-2xl font-bold">
            Tasganesh 3D- Wheel Alignment and Balancing
          </h1>
          <p className="text-sm">
            Address: In front of Sandagewadi HP petrol pump, near Savarkar
            hospital, Palus
          </p>
          <p className="text-sm italic mt-2">
            All the vehicles wheel alignment, Diskout, and balancing will be
            done here.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p>Cash/Credit Memo</p>
          </div>
          <div className="flex justify-between items-start border-t pt-4 w-full max-w-2xl">
            <div className="text-sm text-left">
              <p>Bill No: {billNumber}</p>
              <p>Customer Name: {customerName}</p>
              <p>Vehicle Km: {vehicleKm}</p>
              <p>Vehilcle Number: {vehicleNumber}</p>
            </div>
            <div className="text-sm text-right">
              <p>Bill Date: {billDate}</p>
              <p>Mobile No: {mobileNo}</p>
              <p>To Vehicle Km: {toVehicleKm}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[10%]">
                    Sr. No.
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[50%]">
                    Particular
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    QTY
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Rate
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0">
                {particular.map((particular, index) => (
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      {index + 1}
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      {particular.serviceName}
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      {particular.itemQuantity}
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      {particular.itemRate}
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      {particular.itemQuantity * particular.itemRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center border-t mt-4 pt-4">
          <p>
            Total amount in words:{" "}
            <span className="font-bold">{totalInWords} Only/-</span>
          </p>
          <div className="text-right text-sm">
            <div>
              <p>
                Amount:{" "}
                <span className="font-bold">{totalAmount + discount}</span>
              </p>
              <p>
                Discount: <span className="font-bold">{discount}</span>
              </p>
              <p>
                Total: <span className="font-bold">{totalAmount}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-t mt-4 pt-4">
          <p className="text-sm">
            Note: Wheel alignment is required after each 5000km.
          </p>
          <div className="flex justify-between items-center mt-12">
            <p className="text-sm">
              For Tasganesh 3D wheel alignment and balancing
            </p>
            <p className="text-sm">Authorized Signatory</p>
          </div>
          <p className="text-center text-sm mt-4">Thank You Visit again.</p>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 exclude-from-print"
            onClick={handlePrint}
          >
            Print
          </button>
          {!isPaid && (
            <button
              onClick={handlePaid}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-green-300 text-black-300 hover:bg-green-100/90 h-10 px-4 py-2 exclude-from-print"
            >
              Paid
            </button>
          )}
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-red-300 text-black-300 hover:bg-red-100/90 h-10 px-4 py-2 exclude-from-print"
            onClick={handleClosePopup}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
