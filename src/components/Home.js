import React, { memo } from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail, SiTwitter, SiInstagram } from "react-icons/si";

const Home = () => {
  return (
    <div id="home">
      <div className="banner">
        <div className="socials">
          <div className="social-container">
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
        <div className="banner-box">
          <div className="banner-heading">
            <h1>hey, i'm prem narayankar </h1>
          </div>
          <div className="banner-info">
            <p>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="banner-btn">
            <a href="assets/Resume- Prem Narayankar.pdf" download>
              Download Resume
            </a>
          </div>
        </div>
        <div className="banner-arrow">
          <img
            style={{ height: "100%" }}
            src="assets/giphy.gif"
            alt="down arrow"
          />
        </div>
      </div>
    </div>
  );
};
export default memo(Home);
