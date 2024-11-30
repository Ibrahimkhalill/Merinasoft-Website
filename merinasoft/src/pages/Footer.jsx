/* eslint-disable jsx-a11y/anchor-is-valid */


import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling
import Merinasoft from "../images/merinasoft.png"
function Footer() {
  return (
    <footer>
      <div className="content_footer">
        <div className="top">
          <div className="logo-details">
            <img src={Merinasoft} alt="" />
            <span className="logo_name">Merinasoft</span>
          </div>
          <div className="media-icons">
            <a href="https://www.facebook.com/merinasoft/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://bd.linkedin.com/company/merinasoft"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCj6aOzaOSYC6YNUSgaxjN1A"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Address</li>
            <li>
              <a href="">2nd Floor, A&A Tower, 173 Arambagh, Dhaka 1000</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Top Industry</li>
            <li>
              <a href="#">Retail/Wholesale/Distribution</a>
            </li>
            <li>
              <a href="#">E-commerce</a>
            </li>
            <li>
              <a href="#">Travel, Hotel & Tourism</a>
            </li>
            <li>
              <a href="#">Publishing</a>
            </li>
            <li>
              <a href="#">Utility & Energy</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Top Services</li>
            <li>
              <a href="#">Software Development</a>
            </li>
            <li>
              <a href="#">Mobile Application</a>
            </li>
            <li>
              <a href="#">Web Developemnt service</a>
            </li>
            <li>
              <a href="#">Custom Software Development</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Cloud Applicaion Developemnt</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Get In Touch</li>
            <li>
              <a href="tel:+88014405700100">Mob:+88014405700100(Office)</a>
            </li>
            <li>
              <a href="tel:+8801704473813">Mob:+8801704473813 (HR)</a>
            </li>
            <li>
              <a href="tel:+8801686357311">Mob:+8801686357311(Marketing)</a>
            </li>
            <li>
              <a href="mailto:merinasoftteam@gmail.com">
                merinasoftteam@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:merinasof.official@gmail.com">
                merinasof.official@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright &#169; 2017-2024{" "}
            <span>All rights reserved by Merinasoft.</span>
          </span>
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
