import React from 'react';

import './Button.scss';

const Button = (props) => (
  <a href={props.to} className="btn">
    {props.children}
  </a>
);

export default Button;
