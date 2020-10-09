import React from 'react';
import './Works.scss';
// import WorkHeading from "../../img/WorkHeading.svg";
import WorkSlider from './WorkSlider';

const Works = () => {
  return (
    <section id="works" className="works">
      <div className="works__heading">
        <img src="/img/WorkHeading.svg" alt="WorkHeading" />
      </div>
      <WorkSlider />
    </section>
  );
};

export default Works;
