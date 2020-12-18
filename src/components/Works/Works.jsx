import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WorkSlider from './WorkSlider';
import './Works.scss';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const bgRef = useRef(null);
  const svgRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      {
        x: 2000,
      },
      {
        duration: 0.7,
        x: 0,
        ease: 'ease-out',
        scrollTrigger: {
          id: 'bgRef',
          trigger: bgRef.current,
          start: 'top center+=100px',
          offset: '300px',
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
    gsap.fromTo(
      sliderRef.current,
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
          id: 'sliderRef',
          trigger: bgRef.current,
          start: 'top center+=100px',
          toggleActions: 'play none',
        },
      }
    );
  }, []);

  return (
    <section id="works" className="works" ref={bgRef}>
      <div className="container">
        <div className="works__heading">
          <img src="/img/WorkHeading.svg" alt="WorkHeading" ref={svgRef} />
        </div>
        <div className="works__slider" ref={sliderRef}>
          <WorkSlider />
        </div>
      </div>
    </section>
  );
};

export default Works;
