import React from 'react';

import './Button.scss';

const Button = (props) => (
  <a href={props.to} className="btn" target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

export default Button;
