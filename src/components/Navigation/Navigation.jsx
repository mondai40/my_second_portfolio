import React from "react";
import "./Navigation.scss"

const Navigation = (props) => {
  const modalShow = props.modalShow ? " active" : "";
  const handleClick = props.handleClick;

  return (
    <nav className={"navigation" + modalShow} onClick={handleClick}>
      <ul className="navigation__list">
        <li className="navigation--item"><a href="#hero" className="navigation--link">Home</a></li>
        <li className="navigation--item"><a href="#about" className="navigation--link">About</a></li>
        <li className="navigation--item"><a href="#works" className="navigation--link">Works</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;