import React from "react";
import "./footer.css";
import {NavLink} from "react-router-dom"
import Lastfooter from "./Lastfooter";

const Footer = () => {
  return (
    <header className="footer-section">
      <div className="footer-section--">
       <div className="footer-list">
        <h1>About</h1>
          <h4>siddharth jangid</h4>
          <h6>hello i am siddharth jangid,a front-end web developer</h6>
       </div>

        <div className="footer-list">
        <h1>Links</h1>
          <ul className="footer-nav-list">
            <li>
              <NavLink className="footer-nav-icons" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="footer-nav-icons" to="/project">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink className="footer-nav-icons" to="/skills">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink className="footer-nav-icons" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="footer-nav-icons" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-list">
           <h1>contact us</h1>
           <p><i class="fa-solid fa-envelope"></i>E-mail- siddharthjangid45@gmail.com</p>
           <p><i class="fa-solid fa-location-dot"></i>Location- Bhawani-Mandi,Rajasthan</p>
        </div>
      </div>

    <Lastfooter />
    </header>
  );
};

export default Footer;
