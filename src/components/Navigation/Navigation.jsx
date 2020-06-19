import React from "react";
import "./Navigation.scss"

const Navigation = () => {
    return (
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation--item">About</li>
          <li className="navigation--item">Works</li>
          <li className="navigation--item">Skills</li>
        </ul>
      </nav>
    );
};

export default Navigation;