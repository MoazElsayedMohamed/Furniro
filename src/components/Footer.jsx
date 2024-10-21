import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div>
          <h3 className="footer-main-header">Furniro.</h3>
          <p className="footer-text">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div>
          <h4>Links</h4>
          <p>
            <NavLink to="/">home</NavLink>
          </p>
          <p>
            <NavLink to="/shop">shop</NavLink>
          </p>
          <p>about</p>
          <p>contact</p>
        </div>
        <div>
          <h4>Help</h4>
          <p>payment options</p>
          <p>returns</p>
          <p>privacy policies</p>
        </div>
        <div>
          <h4>Newsletter</h4>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="footer-input"
          />
          <button className="footer-input button">subscribe</button>
        </div>
      </div>
      <div className="bottom-footer">
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
