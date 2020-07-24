import React from "react";

import AboutHeadingImage from "../../img/AboutHeadingImage.svg";
import SkillList from "../shared/Skill/SkillList";
import Button from "../shared/Button/Button";
import AboutInfo from "./AboutInfo";
import "./About.scss";

const {name, image, description, skills, emailUrl, resumeUrl} = AboutInfo;

const About = () => {
  return(
    <section id="about" className="about">
      <div className="about__heading">
        <img src={AboutHeadingImage} alt="AboutHeadingImage" />
      </div>
      <div className="about__image">
        <img src={image} alt="ShinDaimon" />
      </div>
      <div className="about__description">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="about__skill">
          <h2>Skills</h2>
          <SkillList skills={skills}/>
        </div>
        <div className="about__button">
          <Button to={resumeUrl}>Resume</Button>
          <Button to={emailUrl}>Email</Button>
          {/* <a className="about__button--btn btn" href="#hero">Resume</a>
          <a className="about__button--btn btn" href="#hero">Email</a> */}
        </div>
      </div>
    </section>
  );
};

export default About;