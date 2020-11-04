import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="footer__sns">
        <a className="footer__link" href="https://github.com/mondai40">
          <i className="footer__item fab fa-github"></i>
        </a>
        <a className="footer__link" href="https://twitter.com/RulisonSheen">
          <i className="footer__item fab fa-twitter"></i>
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/shin-daimon-8929a2183/"
        >
          <i className="footer__item fab fa-linkedin"></i>
        </a>
      </div>
      <p className="footer__copyright">
        &copy; 2019-{new Date().getFullYear()} Shin Daimon
      </p>
    </section>
  );
};

export default Footer;
