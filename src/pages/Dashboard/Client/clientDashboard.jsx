import "./css/clientDashboard.css";
import { Sidebar } from "../../../components/Dashboard/Client/Sidebar";
import { D_Navbar } from "../../../components/general/Navbar";
import { Outlet } from "react-router";

const ClientDashboard = () => {
  return (
    <>
      <D_Navbar number={12} />
      <div className="client-dashboard">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default ClientDashboard;
