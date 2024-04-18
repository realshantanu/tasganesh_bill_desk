import React, { useState, useEffect } from "react";

export default function VehicleHistory(props) {
    const [vehicleHistory, setVehicleHistory] = useState([]);
    const { vehicleNumber } = props;

    useEffect(() => {
        // Fetch vehicle history
        if ( vehicleNumber && vehicleNumber.length === 10 ) {
            fetch(`http://localhost:5000//api/vehicles/${vehicleNumber}/history`)
                .then((response) => response.json())
                .then((data) => {
                    setVehicleHistory(data);
                    console.log(data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, [vehicleNumber]);

  return (
    <>
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-4">
        <h5 className="text-xl font-bold text-gray-900 mb-4">
          Vehicle History
        </h5>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Bill No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Vehicle KM
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.isArray(vehicleHistory) && vehicleHistory.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.billDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.billId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.vehicleKm}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
