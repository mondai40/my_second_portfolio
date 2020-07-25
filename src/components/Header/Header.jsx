import React, { useState } from "react";
import MediaQuery from "react-responsive";

import headerLogo from "../../img/headerLogo.svg";
import SmartNavigation from "../Navigation/SmartNavigation";
import PCNavigation from "../Navigation/PCNavigation";


import "./Header.scss"

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
      <div className="header__logo" onClick={isShow ? handleClick : function(){}}>
        <a href="#hero">
          <img className="header__logo--img" src={headerLogo} alt="headerLogo" />
          <span className="header__logo--title">Shin Daimon</span>
        </a>
      </div>
      <MediaQuery query="(max-width: 1023px)">
        <div className="header__hamburger" onClick={handleClick}>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </div>
        <SmartNavigation modalShow={isShow} handleClick={handleClick} />
      </MediaQuery>
      <MediaQuery query="(min-width: 1024px)">
        <PCNavigation />
      </MediaQuery>
    </header>
  );
};

export default Header;