import React, { useState } from "react";
import headerLogo from "../../img/headerLogo.svg";
import "./Header.scss"
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [isShow, setShow] = useState(false);

  const handleClick = () => {
    const lines = document.querySelectorAll(".header__hamburger-line");
    lines.forEach((line) => {
      line.classList.toggle("header__hamburger--cross");
    });
    setShow(!isShow);
  };

  return (
    <header className="header">
      <div className="header__logo" onClick={isShow && handleClick}>
        <a href="#hero">
          <img className="header__logo--img" src={headerLogo} alt="headerLogo" />
        </a>
      </div>
      <div className="header__hamburger" onClick={handleClick}>
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
      </div>
      <Navigation modalShow={isShow} handleClick={handleClick} />
    </header>
  );
};

export default Header;