import React from "react";
import headerLogo from "../../img/headerLogo.svg";
import "./Header.scss"
import Navigation from "../Navigation/Navigation";

const handleClick = () => {
  const lines = document.querySelectorAll(".header__hamburger-line");
  lines.forEach((line) => {
    line.classList.toggle("header__hamburger--cross");
  });
};

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo--img" src={headerLogo} alt="headerLogo" />
      </div>
      <div className="header__hamburger" onClick={handleClick}>
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;