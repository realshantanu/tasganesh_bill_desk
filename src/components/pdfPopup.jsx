import React from "react";

export default function PDFPopup(props) {
  const { bill_number, setIsPdfPopupOpen , isPdfPopupOpen} = props;

  const handleClosePopup = () => {
    setIsPdfPopupOpen(false);
  };

  return (
    <>
          <div
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
                  <p>Bill No: 1/24-25</p>
                  <p>Customer Name: Shantanu</p>
                  <p>Vehicle Km: 600</p>
                </div>
                <div className="text-sm text-right">
                  <p>Bill Date: 2024-04-20</p>
                  <p>Mobile No: 9023095879</p>
                  <p>To Vehicle Km: 5600</p>
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
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        1
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Wheel Alignment
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        1
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        500
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        500
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-between items-center border-t mt-4 pt-4">
              <p>Total amount in words:</p>
              <div className="text-right text-sm">
                <div>
                  <p>
                    Amount: <span className="font-bold">[Actual Amount]</span>
                  </p>
                  <p>
                    Discount:{" "}
                    <span className="font-bold">[Actual Discount]</span>
                  </p>
                  <p>
                    Total: <span className="font-bold">[Actual Total]</span>
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
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Print
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-green-300 text-black-300 hover:bg-green-100/90 h-10 px-4 py-2">
                Paid
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-red-300 text-black-300 hover:bg-red-100/90 h-10 px-4 py-2"
                onClick={handleClosePopup}
              >
                Cancel
              </button>
            </div>
          </div>
    </>
  );
}
