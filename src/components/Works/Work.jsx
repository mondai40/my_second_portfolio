import React from "react";
import "./Work.scss";
const Work = (props) => {
  const {title, image, description, technologies} = props.info;
  return (
    <div className="work">
      <img src={image} alt={`${title}Image`}/>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul className="work__technologies">
        {technologies.map((technology, key) => {
          return <li key={key} className="work__technologies--item">{technology}</li>
        })}
      </ul>
    </div>
  );
};

export default Work;