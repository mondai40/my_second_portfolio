import React from "react";
import "./About.scss";
import AboutHeading from "./AboutHeading.svg";
import ShinImage2 from "../../img/ShinDaimon2.JPG"


const About = () => {
  return(
    <section id="about">
      <div className="about--heading">
        <img src={AboutHeading} alt="AboutHeading" />
      </div>
      <div className="about--image">
        <img src={ShinImage2} alt="ShinDaimon" />
      </div>
      <div className="about--description">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid culpa quae ut animi! Dignissimos laboriosam libero perspiciatis voluptate, nobis sunt reprehenderit aperiam saepe dolorem sit. Blanditiis dolor non unde quisquam!</p>
      </div>
    </section>
  );
};

export default About;