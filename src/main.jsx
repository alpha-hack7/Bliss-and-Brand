import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Navbar from "./components/general/Navbar";
import Home from "./pages/basic/home";
import About from "./pages/basic/about";
import Industries from "./pages/basic/industries";
import Contact from "./pages/basic/contact";
import NotFound from "./pages/basic/notFound";

import Login from "./pages/basic/login";
import Signup from "./pages/basic/signup";

import RequestQuote from "./pages/Dashboard/Client/requestQuote";

import ClientDashboard from "./pages/Dashboard/Client/clientDashboard";
import SupplierDashboard from "./pages/Dashboard/Supplier/supplierDashboard";

import Quotations from "./pages/Dashboard/Client/Quotations";
import Orders from "./pages/Dashboard/Client/Orders";
import Invoices from "./pages/Dashboard/Client/Invoices";
import Settings from "./pages/Dashboard/Client/Settings";
import C_Dashboard from "./pages/Dashboard/Client/C_Dashboard";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Notifications from "./pages/Dashboard/Client/Notifications";
import Profile from "./pages/Dashboard/Client/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/industries",
    element: <Industries />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/dashboard/client",
    element: <ClientDashboard />,
    children: [
      {
        index: true,
        element: <C_Dashboard />,
      },
      {
        path: "quotations",
        element: <Quotations />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "request-quote",
        element: <RequestQuote />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/dashboard/supplier",
    element: <SupplierDashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
