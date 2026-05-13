import { NavLink } from "react-router";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./css/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openSidebar = () => {
    setOpen(!open);
  };
  return (
    <nav>
      <div>logo</div>
      <div className="lap-nav">
        <ul className={open ? "open" : "closed"}>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/industries">Industries</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <button className="menu-button" onClick={openSidebar}>
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
