import Sidebar from "../components/sideBar";
import MonthlyReportDashboard from "../dashboard/monthlyReportDashboard";


export default function MOnthlyReport() {
  return (
    <>
    <div className="flex flex-row">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 pr-10 pt-10 pb-10">
          <MonthlyReportDashboard />
        </div>
      </div>
    </>
  );
}
