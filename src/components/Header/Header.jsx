import React, { useState, useRef, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

// import headerLogo from '../../img/headerLogo.svg';
import SmartNavigation from '../Navigation/SmartNavigation';
import PCNavigation from '../Navigation/PCNavigation';

import './Header.scss';

const Header = () => {
  const [isShow, setShow] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y >= -100) return;
    if (currPos.y - prevPos.y < 0) {
      console.log('go down');
      setHideHeader(true);
    } else if (currPos.y - prevPos.y > 0) {
      console.log('go up');
      setHideHeader(false);
    }
  });

  const handleClick = () => {
    const lines = document.querySelectorAll('.header__hamburger-line');
    lines.forEach((line) => {
      line.classList.toggle('header__hamburger--cross');
    });
    setShow(!isShow);
  };

  return (
    <header className={hideHeader ? 'header scrollHide' : 'header'} id="header">
      <div
        className="header__logo"
        onClick={isShow ? handleClick : function () {}}
      >
        <a href="#hero">
          <img
            className="header__logo--img"
            src="/img/headerLogo.svg"
            alt="headerLogo"
          />
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
