import React, { memo } from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail, SiTwitter, SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="main-footer">
          <div className="footer-box">
            <h1 className="footer-heading">prem narayankar</h1>
            <p className="footer-info">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="footer-box">
            <h1 className="footer-heading">social</h1>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/prem-narayankar/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <BsLinkedin />
                </span>
              </a>
              <a
                href="mailto:premnarayankar036@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <SiGmail />
                </span>
              </a>
              <a
                href="https://twitter.com/prem_narayankar"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <SiTwitter />
                </span>
              </a>
              <a
                href="https://www.instagram.com/prem_narayankar/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <SiInstagram />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <span>© Copyright 2022. Made by Prem Narayankar</span>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
