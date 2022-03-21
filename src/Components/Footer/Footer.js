import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer__container padding--medium">
      <div className="margin-tb--large">
          <p className="text--large">Let's Get In Touch</p>
      </div>
      <div className="footer__icons">
          <a href="https://github.com/Ash-D23/"><i className="fab fa-github"></i></a>
          <a href="https://twitter.com/Ashutosh_devtlk"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/ashutosh18k23/"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="margin-tb--large">
          <p className="text--medium">Copyrights © 2022 StyliBook Store</p>
      </div>
    </footer>
  )
}

export default Footer