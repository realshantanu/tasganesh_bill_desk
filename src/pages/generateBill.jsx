import React, { useState } from "react";
import Sidebar from "../components/sideBar";
import BillForm from "../components/billForm";
import DueBillCard from "../components/dueBillCard";

export default function GenerateBill() {
  // CUSTOMER DETAILS State
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleKm, setVehicleKm] = useState("");
  const [nextKm, setNextKm] = useState("");
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 pl-4 pt-10 pb-10">
          <BillForm
            vehicleNumber={vehicleNumber}
            setVehicleNumber={setVehicleNumber}
            vehicleKm={vehicleKm}
            setVehicleKm={setVehicleKm}
            nextKm={nextKm}
            setNextKm={setNextKm}
            customer={customer}
            setCustomer={setCustomer}
            address={address}
            setAddress={setAddress}
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
          />
        </div>
        <div className="w-1/3 pr-4 pl-2 pt-10">
          <DueBillCard />
        </div>
      </div>
    </>
  );
}
