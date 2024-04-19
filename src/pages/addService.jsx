import Sidebar from "../components/sideBar";
import AddService from "../components/addService";

export default function AddServicePage() {
  return (
    <>
    <div className="flex flex-row">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 pr-10 pt-10 pb-10">
          <AddService />
        </div>
      </div>
    </>
  );
}