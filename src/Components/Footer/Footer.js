import React from 'react';
import './Footer.css';

function Footer() {

  const year = new Date().getFullYear()
  return (
    <footer classNameName="footer__container padding--medium">
      <div classNameName="margin-tb--large">
          <p classNameName="text--large">Let's Get In Touch</p>
      </div>
      <div classNameName="footer__icons">
          <a href="https://github.com/Ash-D23/"><i classNameName="fab fa-github"></i></a>
          <a href="https://twitter.com/Ashutosh_devtlk"><i classNameName="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/ashutosh18k23/"><i classNameName="fab fa-linkedin"></i></a>
      </div>
      <div classNameName="margin-tb--large">
          <p classNameName="text--medium">Copyrights © {year} StyliBook Store</p>
      </div>
    </footer>
  )
}

export default Footer