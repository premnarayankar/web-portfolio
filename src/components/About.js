import React, { memo } from "react";
import { Link } from "react-router-dom";

const About = ({ contactRef }) => {
  return (
    <div id="about" className="container">
      <div className="me-box">
        <h1 className="sub-heading">about me</h1>
        <p className="info center">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="info-box self-start">
        <div className="box">
          <h2 className="title-heading">Get to know me!</h2>
          <p className="info">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section. I also like
            sharing content related to the stuff that I have learned over the
            years in Web Development so it can help other people of the Dev
            Community. Feel free to Connect or Follow me on my Linkedin where I
            post useful content related to Web Development and Programming I'm
            open to Job opportunities where I can contribute, learn and grow. If
            you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
          </p>
          <div>
            <Link
              className="btn"
              to="/#contacts"
              onClick={() => {
                window.scrollTo({
                  top: contactRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              contact
            </Link>
          </div>
        </div>
        <div className="box">
          <h2 className="title-heading ">My Skills</h2>
          <div className="skills">
            <span>React</span>
            <span>Redux</span>
            <span>Node JS</span>
            <span>Express JS</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>CSS</span>
            <span>Responsive Design</span>
            <span>HTML</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
