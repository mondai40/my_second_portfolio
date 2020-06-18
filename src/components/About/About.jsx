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
        <h1>Shin Daimon</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid culpa quae ut animi! Dignissimos laboriosam libero perspiciatis voluptate, nobis sunt reprehenderit aperiam saepe dolorem sit. Blanditiis dolor non unde quisquam!</p>
        <div>
          <h2>Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
      <div>
        <a href="#">Resume</a>
        <a href="#">Email</a>
      </div>
    </section>
  );
};

export default About;