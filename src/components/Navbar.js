import React, { memo, useEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = ({ refList }) => {
  const [path, setPath] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { homeRef, aboutRef, projectRef, contactRef } = refList;

  const navigationHandler = () => {
    setPath(!path);
    setToggle(false);
  };

  useEffect(() => {
    (() => {
      if (window.location.hash === "#home") {
        window.scrollTo({
          top: homeRef.current.offsetTop,
          behavior: "smooth",
        });
      } else if (window.location.hash === "#about") {
        window.scrollTo({
          top: aboutRef.current.offsetTop,
          behavior: "smooth",
        });
      } else if (window.location.hash === "#projects") {
        window.scrollTo({
          top: projectRef.current.offsetTop,
          behavior: "smooth",
        });
      } else if (window.location.hash === "#contacts") {
        window.scrollTo({
          top: contactRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    })();
  }, [path]);

  return (
    <header>
      <div className="brand">
        <div className="logo">
          <img
            style={{ width: "100%" }}
            className="logo"
            src={"logo512.png"}
          ></img>
        </div>
        <h1>Prem Narayankar</h1>
      </div>
      <nav>
        <ul
          className={`navbar ${
            toggle ? "mobile common" : "mobile-hide common"
          }`}
        >
          <Link onClick={navigationHandler} className="link" to="/#home">
            home
          </Link>
          <Link onClick={navigationHandler} className="link" to="/#about">
            about
          </Link>
          <Link onClick={navigationHandler} className="link" to="/#projects">
            projects
          </Link>
          <Link onClick={navigationHandler} className="link" to="/#contacts">
            contacts
          </Link>
        </ul>
      </nav>
      <div className="toggle">
        {!toggle ? (
          <span onClick={() => setToggle(!toggle)}>
            <RiMenu3Line />
          </span>
        ) : (
          <span onClick={() => setToggle(!toggle)}>
            <RiCloseLine />
          </span>
        )}
      </div>
    </header>
  );
};

export default memo(Navbar);
