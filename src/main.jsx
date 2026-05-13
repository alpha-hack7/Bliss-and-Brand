import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Navbar from "./components/general/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Industries from "./pages/industries";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import Signup from "./pages/signup";
import RequestQuote from "./pages/request-a-quote";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";

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
    path: "/request-quote",
    element: <RequestQuote />,
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
