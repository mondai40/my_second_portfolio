import React from 'react';

import './Button.scss';

const Button = ({ children, to }) => (
  <a href={to} className="btn" target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default Button;
