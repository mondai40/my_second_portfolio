import React from "react";
import headerLogo from "../../img/headerLogo.svg";
import "./Header.scss"
import Navigation from "../Navigation/Navigation";

const handleClick = () => {
    console.log("test");
};

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header--logo">
                    <img src={headerLogo} alt="headerLogo" />
                </div>
                <div className="header--hamburger hamburger" onClick={handleClick}>
                    <div className="header--hamburger__cross hamburger--line"></div>
                    <div className="header--hamburger__cross hamburger--line"></div>
                    <div className="header--hamburger__cross hamburger--line"></div>
                </div>
                <Navigation />
            </header>
        </>
    );
};

export default Header;