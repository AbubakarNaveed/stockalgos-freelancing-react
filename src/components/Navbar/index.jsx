import React from "react";
import "../../styles/Navbar/navbar.css";
import Fintech from "../../assets/Product Hunt.svg";
import NavLogo from "../../assets/StockAlgos logo for dark BG.png";
const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div>
          <img src={NavLogo} className="navImage" />
        </div>
        <div className="navbar__btn__group">
          <img src={Fintech} alt="Product_HuntSVG" className="navImage" />
          <button>Try at $0 for 7 days</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
