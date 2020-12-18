import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SkillList from '../shared/Skill/SkillList';
import Button from '../shared/Button/Button';
import profileData from '../../fixtures/profile.json';

import './About.scss';

gsap.registerPlugin(ScrollTrigger);

const { name, image, description, skills, emailUrl, resumeUrl } = profileData;

const About = () => {
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      {
        x: -2000,
      },
      {
        duration: 0.7,
        x: 0,
        ease: 'ease-out',
        scrollTrigger: {
          id: 'bgRef',
          trigger: bgRef.current,
          start: 'top center+=100px',
          toggleActions: 'play none',
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        delay: 0.7,
        duration: 0.4,
        autoAlpha: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          id: 'textRef',
          trigger: bgRef.current,
          start: 'top center+=100px',
          toggleActions: 'play none',
        },
      }
    );
    gsap.fromTo(
      imageRef.current,
      {
        autoAlpha: 0,
        scale: 1.2,
      },
      {
        delay: 0.5,
        duration: 0.5,
        autoAlpha: 1,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          id: 'imageRef',
          trigger: bgRef.current,
          start: 'top center+=100px',
          toggleActions: 'play none',
        },
      }
    );
    gsap.fromTo(
      svgRef.current,
      {
        autoAlpha: 0,
        scale: 1.5,
      },
      {
        delay: 1,
        duration: 0.5,
        autoAlpha: 1,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          id: 'svgRef',
          trigger: bgRef.current,
          start: 'top center+=100px',
          toggleActions: 'play none',
        },
      }
    );
  }, []);

  return (
    <section id="about" className="about" ref={bgRef}>
      <div className="about__heading">
        <img
          src="/img/AboutHeadingImage.svg"
          alt="AboutHeadingImage"
          ref={svgRef}
        />
      </div>
      <div className="about__image">
        <img src={image} alt="ShinDaimon" ref={imageRef} />
      </div>
      <div className="about__description" ref={textRef}>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="about__skill">
          <h2>Skills</h2>
          <SkillList skills={skills} />
        </div>
        <div className="about__button">
          <Button to={resumeUrl}>Resume</Button>
          <Button to={emailUrl}>Email</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
