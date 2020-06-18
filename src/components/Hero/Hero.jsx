import React from "react";
import "./Hero.scss"
import ShinImage from "../../img/ShinDaimon.jpg";
import HeroHeading from "./HeroHeading.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero--heading">
        <img src={HeroHeading} alt="ShinDaimonHeading" />
      </div>
      <div className="hero--image">
        <img src={ShinImage} alt="ShinDaimon" />
      </div>
      <div className="hero-arrow"></div>
    </section>
  );
}

export default Hero;