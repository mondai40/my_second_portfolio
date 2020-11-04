import React from 'react';

import SkillList from '../Skill/SkillList';
import Button from '../Button/Button';

import './ModalContent.scss';

function MondalContent(props) {
  const {
    title,
    image,
    description,
    github,
    livePage,
    technologies,
  } = props.data;
  const handleCloseModal = props.handleCloseModal;
  return (
    <div className="modalContent">
      <div className="modalContent__container">
        <div className="modalContent__image">
          <img src={image} alt={title} />
        </div>
        <div className="modalContent__info">
          <h1>{title}</h1>
          <div className="modalContent__linkBtn">
            {livePage ? <Button to={livePage}>Visit Page</Button> : null}
            {github ? <Button to={github}>Github</Button> : null}
          </div>
          <div className="modalContent__description">
            <ul>
              {description.map((desc, index) => (
                <li>{desc}</li>
              ))}
            </ul>
          </div>
          <div className="modalContent__technologies">
            <SkillList skills={technologies} />
          </div>
        </div>
        <div className="modalContent__closeBtn">
          <button onClick={() => handleCloseModal()}>Close</button>
        </div>
      </div>
      <div className="modalContent__closeIcon">
        <i class="fas fa-times" onClick={() => handleCloseModal()}></i>
      </div>
    </div>
  );
}

export default MondalContent;
