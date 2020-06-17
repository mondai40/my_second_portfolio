import React from "react";
import "./Hero.scss"
import ShinImage from "../../img/headerLogo.svg";

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero--heading">
                Shin Daimon
            </div>
            <div className="hero--image">
                <img src={ShinImage} alt="ShinDaimon" />
            </div>
        </section>
    );
}

export default Hero;