import React from "react";

import "./SmartNavigation.scss"

const SmartNavigation = (props) => {
  const modalShow = props.modalShow ? " active" : "";
  const handleClick = props.handleClick;

  return (
    <nav className={"smartNavigation" + modalShow} onClick={handleClick}>
      <ul className="smartNavigation__list">
        <li className="smartNavigation--item"><a href="#hero" className="smartNavigation--link">Home</a></li>
        <li className="smartNavigation--item"><a href="#about" className="smartNavigation--link">About</a></li>
        <li className="smartNavigation--item"><a href="#works" className="smartNavigation--link">Works</a></li>
      </ul>
    </nav>
  );
};

export default SmartNavigation;