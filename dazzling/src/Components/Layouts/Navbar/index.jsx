import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Dropdown from "../../Dropdown";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleClickDropdown = () => {
    setisOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbarContents">
          <div className="navbarLogo">
            <p className="logo">Dazzling Demo</p>
          </div>
          <div className="menuItems">
            <Link to="">
              <button className="home">Home</button>
            </Link>
            <Link to="/Gallery">
              <button className="gallery">Gallery</button>
            </Link>
            <Link to="/Shortcodes">
              <button className="shortcodes">Shortcodes</button>
            </Link>
            <Link to="/About">
              <div className="aboutBtn" onClick={handleClickDropdown}>
                <button className="about">
                  About
                  <i class="fa-solid fa-caret-down"></i>
                </button>
                {isOpen && <Dropdown />}
              </div>
            </Link>
            <Link to="/Languages">
              <button className="languages">Languages</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
