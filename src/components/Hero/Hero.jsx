import React from "react";
import "./Hero.scss"
import ShinImage from "../../img/ShinDaimon.png";
import HeroHeading from "../../img/HeroHeading.svg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__heading">
        <img src={HeroHeading} alt="ShinDaimonHeading" />
      </div>
      <div className="hero__image">
        <img src={ShinImage} alt="ShinDaimon" />
      </div>
      {/* <div className="hero--arrow"><a href="#about" className="arrow__link"></a></div> */}
    </section>
  );
}

export default Hero;