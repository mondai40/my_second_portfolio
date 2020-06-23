import React from "react";
import "./About.scss";
import AboutHeading from "./AboutHeading.svg";
import ShinImage2 from "../../img/ShinDaimon2.JPG"


const About = () => {
  return(
    <section id="about" class="about">
      <div className="about__heading">
        <img src={AboutHeading} alt="AboutHeading" />
      </div>
      <div className="about__image">
        <img src={ShinImage2} alt="ShinDaimon" />
      </div>
      <div className="about__description">
        <h1>Shin Daimon</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid culpa quae ut animi! Dignissimos laboriosam libero perspiciatis voluptate, nobis sunt reprehenderit aperiam saepe dolorem sit. Blanditiis dolor non unde quisquam!</p>
        <div className="about__skill">
          <h2>Skills</h2>
          <ul className="about__skill--list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="about__button">
          <a className="about__button--btn btn" href="#">Resume</a>
          <a className="about__button--btn btn" href="#">Email</a>
        </div>
      </div>

    </section>
  );
};

export default About;