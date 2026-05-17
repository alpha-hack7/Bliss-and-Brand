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
  const sidebarItems = [
    {
      id: 1,
      title: "Dashboard",
      link: "/dashboard/client",
      icon: <FiGrid color="white" />,
    },
    {
      id: 2,
      title: "Quotations",
      link: "/dashboard/client/quotations",
      icon: <FiFileText color="white" />,
    },
    {
      id: 3,
      title: "Invoices",
      link: "/dashboard/client/invoices",
      icon: <FiCreditCard color="white" />,
    },
    {
      id: 4,
      title: "Orders",
      link: "/dashboard/client/orders",
      icon: <FiShoppingBag color="white" />,
    },
    {
      id: 5,
      title: "Settings",
      link: "/dashboard/client/settings",
      icon: <FiSettings color="white" />,
    },
    {
      id: 6,
      title: "Logout",
      link: "/",
      icon: <FiLogOut color="white" />,
    },
  ];
  const fullNav = (
    <div className="menu">
      {sidebarItems.map((sidebarItem) => (
        <div onClick={() => navigate(sidebarItem.link)}>
          <Fragment>{sidebarItem.icon}</Fragment>
          <span>{sidebarItem.title}</span>
        </div>
      ))}
    </div>
  );

  const iconsNav = (
    <div className="menu">
      {sidebarItems.map((sidebarItem) => (
        <div onClick={() => navigate(sidebarItem.link)}>
          <Fragment>{sidebarItem.icon}</Fragment>
          <span className="tag">{sidebarItem.title}</span>
        </div>
      ))}
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
