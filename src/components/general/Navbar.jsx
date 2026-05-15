import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import Logo from "../../assets/general/logo.png";
import { FiMenu, FiX, FiBell, FiUser, FiArrowLeftCircle } from "react-icons/fi";
import "./css/navbar.css";

export const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <button className="back-arrow" onClick={() => navigate("/")}>
      <FiArrowLeftCircle size={25} />
    </button>
  );
};

export const D_Navbar = ({ number }) => {
  const num_notifications = number;
  return (
    <div className="dash-nav">
      <div className="notifications">
        <FiBell color="white" size={30} />
        <div className="num">{num_notifications}</div>
      </div>
      <div className="profile">
        <FiUser color="white" size={30} />
      </div>
    </div>
  );
};
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openSidebar = () => {
    setOpen(!open);
  };
  return (
    <nav>
      <div>
        <img src={Logo} alt="logo" height={40} width={70} />
      </div>
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
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </div>
      <button className="menu-button" onClick={openSidebar}>
        {open ? (
          <FiX size={20} color="black" />
        ) : (
          <FiMenu size={20} color="black" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
