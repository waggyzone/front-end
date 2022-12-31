import React, { useState } from "react";
import Logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../../styles/Navbar.css";
import UserService from "../../Api/UserService";
import './index.css'
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link className="navbar__link" to="/"> Home </Link>
          <Link className="navbar__link" to="/store"> Store </Link>
          <Link className="navbar__link" to="/food"> Food </Link>
          <Link className="navbar__link" to="/about"> About </Link>
          <Link className="navbar__link" to="/contact"> Contact </Link>
          <Link className="navbar__link" to="/login"> Login </Link>
          <Link className="navbar__link" to="/product"> Product </Link>
          <Link className="navbar__link" to="/accessories"> Accessories </Link>

        </div>
      </div>
      <div className="rightSide">
        <Link className="navbar__link"  to="/"> Home </Link>
        <Link className="navbar__link" to="/store"> Store</Link>
        <Link className="navbar__link" to="/food"> Food </Link>
        <Link className="navbar__link" to="/about"> About </Link>
        <Link className="navbar__link" to="/contact"> Contact </Link>
        <Link className="navbar__link" to="/login"> Login </Link>
        <Link className="navbar__link" to="/product"> Product </Link>
        <Link className="navbar__link" to="/accessories"> Accessories </Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
