import React from 'react';

import SkillList from '../shared/Skill/SkillList';

import './Work.scss';

const Work = (props) => {
  const {
    title,
    subTitle,
    image,
    description,
    github,
    livePage,
    technologies,
  } = props.info;

  const PageLink = livePage ? (
    <h1>
      <a href={livePage} target="_blank">
        {title}
        <i class="fas fa-external-link-alt"></i>
      </a>
    </h1>
  ) : (
    <h1>{title}</h1>
  );
  return (
    <div className="work">
      <div className="work__image">
        <img src={image} alt={title} className="work__image" />
      </div>
      <div className="work__info">
        {PageLink}
        <p>{subTitle}</p>
        <div className="work__link">
          <a href={github} target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div className="work__technologies">
          <SkillList skills={technologies} />
        </div>
      </div>
    </div>
  );
};

export default Work;
