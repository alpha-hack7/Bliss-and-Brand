import { useNavigate } from "react-router";
import { Fragment, useState } from "react";
import {
  FiSettings,
  FiShoppingBag,
  FiGrid,
  FiLogOut,
  FiFileText,
  FiCreditCard,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const fullNav = (
    <div className="menu">
      <div onClick={() => navigate("/dashboard/client")}>
        <FiGrid title="Dashboard" />
        <span>Dashboard</span>
      </div>
      <div onClick={() => navigate("/dashboard/client/quotations")}>
        <FiFileText title="Quotations" />
        <span>Quotations</span>
      </div>
      <div onClick={() => navigate("/dashboard/client/invoices")}>
        <FiCreditCard title="Invoices" />
        <span>Invoices</span>
      </div>
      <div onClick={() => navigate("/dashboard/client/orders")}>
        <FiShoppingBag title="Orders" />
        <span>Orders</span>
      </div>
      <div onClick={() => navigate("/dashboard/client/settings")}>
        <FiSettings title="Settings" />
        <span>Settings</span>
      </div>
      <div onClick={() => navigate("/")}>
        <FiLogOut title="Logout" />
        <span>Logout</span>
      </div>
    </div>
  );

  const iconsNav = (
    <div className="menu">
      <div onClick={() => navigate("/dashboard/client")}>
        <FiGrid title="Dashboard" />
      </div>
      <div onClick={() => navigate("/dashboard/client/quotations")}>
        <FiFileText title="Quotations" />
      </div>
      <div onClick={() => navigate("/dashboard/client/invoices")}>
        <FiCreditCard title="Invoices" />
      </div>
      <div onClick={() => navigate("/dashboard/client/orders")}>
        <FiShoppingBag title="Orders" />
      </div>
      <div onClick={() => navigate("/dashboard/client/settings")}>
        <FiSettings title="Settings" />
      </div>
      <div onClick={() => navigate("/")}>
        <FiLogOut title="Logout" />
      </div>
    </div>
  );

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="dashboard-sidebar">
      {open ? <Fragment>{fullNav}</Fragment> : <Fragment>{iconsNav}</Fragment>}
      <button className="minimize-sidebar" onClick={toggleSidebar}>
        {open ? <FiChevronsLeft size={30} /> : <FiChevronsRight size={30} />}
      </button>
    </div>
  );
};
