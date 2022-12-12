import React from 'react';

const Footer = () => (
 
<footer className="footer-section">
  <div className="container">
    <div className="footer-left-pic">
      <img src="img/footer-right-pic.png" alt="" />
    </div>
    <div className="footer-right-pic">
      <img src="img/footer-right-pic.png" alt="" />
    </div>
    <a href="/" className="footer-logo">
      <img src="./img/logo.png" alt="" />
    </a>
    <ul className="main-menu footer-menu">
      <li><a href="/">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/HomePage">Games</a></li>
      <li><a href="/Genres">Genres</a></li>
      <li><a href="/Platforms">Platforms</a></li>
      <li><a href="/Publishers">Publishers</a></li>
    </ul>
    <div className="footer-social d-flex justify-content-center">
      <a href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
      <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
      <a href="https://www.twitter.com/"><i className="fa fa-twitter" /></a>
    </div>
  </div>
</footer>
)

export default Footer;
