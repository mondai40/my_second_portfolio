import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Work from './Work';
import workData from '../../fixtures/workList.json';

import './WorkSlider.scss';

const renderWork = (workData) => {
  return workData.map((workItem, key) => {
    return <Work info={workItem} key={key} />;
  });
};

const WorkSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{renderWork(workData)}</Slider>;
};

export default WorkSlider;
