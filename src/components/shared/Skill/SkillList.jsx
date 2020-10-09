import React from 'react';

import Skill from './Skill';

import './SkillList.scss';

const SkillList = (props) => {
  const { skills } = props;
  return (
    <ul className="skill__list">
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </ul>
  );
};

export default SkillList;
