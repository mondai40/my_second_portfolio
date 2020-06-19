import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="footer__sns">
        <span className="footer__item">git</span>
        <span className="footer__item">instagram</span>
        <span className="footer__item">linkedin</span>
      </div>
      <p className="footer__copyright">&copy; 2019-{new Date().getFullYear()} Shin Daimon</p>
    </section>
  );
};

export default Footer;