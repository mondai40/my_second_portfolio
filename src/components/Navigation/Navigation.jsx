import React from "react";
import "./Navigation.scss"

const Navigation = () => {
    return (
        <>
            <nav className="navigation">
                <ul className="navigation--textList">
                    <li>About</li>
                    <li>Works</li>
                    <li>Skills</li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;