import React, { useState, useRef, useEffect } from "react";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MediaQuery from "react-responsive";
// import { Controller, Scene } from 'react-scrollmagic';

import headerLogo from "../../img/headerLogo.svg";
import SmartNavigation from "../Navigation/SmartNavigation";
import PCNavigation from "../Navigation/PCNavigation";

import "./Header.scss"

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isShow, setShow] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 2,
      ease: 'none',
      y: -100,
      scrollTrigger: {
        endTrigger: headerRef.current,
        start: 'top',
        toggleActions: 'play none none reverse',
        markers: true
      }
    })


    // revealRefs.current.forEach((el, index) => {
    //   gsap.fromTo(el, {
    //     autoAlpha: 0
    //   }, {
    //     duration: 1,
    //     autoAlpha: 1,
    //     ease: 'none',
    //     scrollTrigger: {
    //       id: `section-${index + 1}`,
    //       trigger: el,
    //       start: 'top bottom-=30px',
    //       toggleActions: 'play none none reverse',
    //     }
    //   })
    // });
    console.log(headerRef.current.offsetHeight);
  }, []);

  const handleClick = () => {
    const lines = document.querySelectorAll(".header__hamburger-line");
    lines.forEach((line) => {
      line.classList.toggle("header__hamburger--cross");
    });
    setShow(!isShow);
  };

  return (
    <header className="header" id="header" ref={headerRef}>
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