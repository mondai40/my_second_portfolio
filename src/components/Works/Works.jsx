import React from 'react';
import './Works.scss';
import WorkSlider from './WorkSlider';

const Works = () => {
  return (
    <section id="works" className="works">
      <div className="container">
        <div className="works__heading">
          <img src="/img/WorkHeading.svg" alt="WorkHeading" />
        </div>
        <WorkSlider />
      </div>
    </section>
  );
};

export default Works;
