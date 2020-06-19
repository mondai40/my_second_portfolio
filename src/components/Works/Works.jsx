import React from "react";
import "./Works.scss";
import WorkHeading from "./WorkHeading.svg";


const Works = () => {
  return(
    <section id="works" className="works">
      <div className="works__heading">
        <img src={WorkHeading} alt="WorkHeading" />
      </div>
      <div className="works__image">
        imgimgimgimg
        <div className="arrow arrow--right"></div>
        <div className="arrow arrow--left"></div>
        <div></div>
      </div>
    </section>
  );
};

export default Works;