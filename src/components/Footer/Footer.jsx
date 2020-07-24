import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="footer__sns">
        <a className="footer--link" href="https://github.com/mondai40"><i class="footer__item fab fa-github"></i></a>
        <a className="footer--link" href="https://www.instagram.com/shindraemon/"><i class="footer__item fab fa-instagram"></i></a>
        <a className="footer--link" href="https://www.linkedin.com/in/shin-daimon-8929a2183/"><i class="footer__item fab fa-linkedin"></i></a>
      </div>
      <p className="footer__copyright">&copy; 2019-{new Date().getFullYear()} Shin Daimon</p>
    </section>
  );
};

export default Footer;