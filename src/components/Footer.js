import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="copyright">
        <p>© 2023 Segun Olowoyeye Movie </p>
      </div>
      <div className="terms-of-use">
        <p><a href="/terms">Terms of Use</a></p>
      </div>
    </footer>
  );
};

export default Footer;
