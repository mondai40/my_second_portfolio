import React from 'react';

import ModalButton from '../shared/ModalButton/ModalButton';
import SkillList from '../shared/Skill/SkillList';
import Button from '../shared/Button/Button';

import './Work.scss';

const Work = (props) => {
  const { title, subTitle, image, livePage, technologies, github } = props.info;

  return (
    <div className="work">
      <div className="work__image">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="work__image" />
        </a>
      </div>
      <div className="work__info">
        <h1>
          <a href={github} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h1>
        <p>{subTitle}</p>
        <div className="work__button">
          {livePage ? <Button to={livePage}>Visit Page</Button> : null}
          {github ? <Button to={github}>Github</Button> : null}
        </div>
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
