import React from 'react';

import './Hamburger.scss';

const handleClick = () => {
  console.log('hello');
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('open');
};

const Hamburger = ({ isShow }) => {
  return (
    <div className={isShow ? 'hamburger show' : 'hamburger'}>
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
    </div>
  );
};

export default Hamburger;
