import "./css/clientDashboard.css";
import { Sidebar } from "../../../components/Dashboard/Client/Sidebar";
import { D_Navbar } from "../../../components/general/Navbar";
import { Outlet } from "react-router";

const ClientDashboard = () => {
  const number_notifications = 12;
  return (
    <>
      <D_Navbar
        number={number_notifications}
        notification_link="/dashboard/client/notifications"
        profile_link="/dashboard/client/profile"
      />
      <div className="client-dashboard">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default ClientDashboard;
