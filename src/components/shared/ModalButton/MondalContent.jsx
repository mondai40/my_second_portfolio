import React from 'react';

import SkillList from '../Skill/SkillList';

import './ModalContent.scss';

function MondalContent(props) {
  const { title, subTitle, image, livePage, technologies } = props.data;
  return (
    <div className="modalContent">
      <div className="modalContent__image">
        <img src={image} alt={title} />
      </div>
      <div className="modalContent__info">
        <h1>
          <a href={livePage} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h1>
        <p>{subTitle}</p>
        <div className="modalContent__technologies">
          <SkillList skills={technologies} />
        </div>
      </div>
    </div>
  );
}

export default MondalContent;
