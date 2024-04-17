import React from "react";
import Sidebar from "../components/sideBar";
import BillForm from "../components/billForm";
import DueBillCard from "../components/dueBillCard";

export default function GenerateBill() {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 pl-4 pt-10 pb-10">
          <BillForm />
        </div>
        <div className="w-1/3 pr-4 pl-2 pt-10">
          <DueBillCard />
          </div>
      </div>
    </>
  );
}
