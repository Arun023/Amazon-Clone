import React from "react";
import "./css/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <button className="footer__btn">Back To Top</button>
      <div className="footer__links">
        <div className="footer__links__items">
          Get to Know About Us
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="footer__links__items">
          Connect With Us
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer__links__items">
          Make Money With Us
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="footer__links__items">
          Let Us Help You
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
