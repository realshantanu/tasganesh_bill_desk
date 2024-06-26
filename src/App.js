import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GenerateBill from "./pages/generateBill";
import DailyReport from "./pages/dailyReport";
import MonthlyReport from "./pages/monthlyReport";
import PendingBills from "./pages/pendingBills";
import AddServicePage from "./pages/addService";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GenerateBill />} />
          <Route path="/daily-report" element={<DailyReport />} />
          <Route path="/range-report" element={<MonthlyReport />} />
          <Route path="/pending-bills" element={<PendingBills />} />
          <Route path="/add-service" element={<AddServicePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
