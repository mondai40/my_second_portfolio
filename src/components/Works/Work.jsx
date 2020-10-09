import React from 'react';

import SkillList from '../shared/Skill/SkillList';

import './Work.scss';

const Work = (props) => {
  const { title, image, description, technologies } = props.info;
  return (
    <div className="work">
      <img src={image} alt={title} className="work__image" />
      <h1 className="work__heading">{title}</h1>
      <p className="work__description">{description}</p>
      <div className="work__technologies">
        <SkillList skills={technologies} />
      </div>
    </div>
  );
};

export default Work;
