import React from "react";
import headerLogo from "../../img/headerLogo.svg";
import "./Header.scss"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header--logo">
                    <img src={headerLogo} alt="headerLogo" />
                </div>
                <div className="header--hamburger hamburger">
                    <div className="header--hamburger__cross hamburger--line"></div>
                    <div className="header--hamburger__cross hamburger--line"></div>
                    <div className="header--hamburger__cross hamburger--line"></div>
                </div>
            </header>
        </>
    );
};

export default Header;