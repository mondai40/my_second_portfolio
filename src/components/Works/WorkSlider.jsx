import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WorkSlider.scss"

import Work from "./Work";
import { WorkList } from "./WorkList"

const renderWork = (WorkList) => {
  return (
    WorkList.map((workItem, key) => {
      return <Work info={workItem} key={key} />
    })
  );
};

// const CustomArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, marginLeft: "50px"}}
//       onClick={onClick}
//     />
//   );
// }

const WorkSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {renderWork(WorkList)}
    </Slider>
  );
}

export default WorkSlider;