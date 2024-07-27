import React from "react";
import Logo from "./cllg-logo.png";
import Name from "./cllg-title.png";
import "./Navbar.modules.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="name">
          <img src={Name} alt="name" />
        </div>
      </div>
    </>
  );
};

export default Navbar;