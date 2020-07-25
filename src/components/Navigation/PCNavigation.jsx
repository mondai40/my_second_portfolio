import React from "react";

import "./PCNavigation.scss"

const PCNavigation = () => {
  return (
    <nav className="pcNavigation">
      <ul className="pcNavigation__list">
        <li className="pcNavigation--item"><a href="#hero" className="pcNavigation--link">Home</a></li>
        <li className="pcNavigation--item"><a href="#about" className="pcNavigation--link">About</a></li>
        <li className="pcNavigation--item"><a href="#works" className="pcNavigation--link">Works</a></li>
      </ul>
    </nav>
  );
};

export default PCNavigation;