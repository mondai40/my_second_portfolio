import React from 'react';

import ModalButton from '../shared/ModalButton/ModalButton';
import SkillList from '../shared/Skill/SkillList';

import './Work.scss';

const Work = (props) => {
  const { title, subTitle, image, livePage, technologies } = props.info;

  return (
    <div className="work">
      <div className="work__image">
        <img src={image} alt={title} className="work__image" />
      </div>
      <div className="work__info">
        <h1>
          <a href={livePage} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h1>
        <p>{subTitle}</p>
        <div className="work__detailBtn">
          <ModalButton data={props.info} />
        </div>
        <div className="work__technologies">
          <SkillList skills={technologies} />
        </div>
      </div>
    </div>
  );
};

export default Work;
