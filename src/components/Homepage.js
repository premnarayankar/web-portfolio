import React, { lazy, memo, Suspense, useEffect } from "react";
import Home from "./Home";
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Contacts = lazy(() => import("./Contacts"));

const Homepage = ({ refList }) => {
  document.title = `Prem Narayankar | React Developer | Front-end Developer`;

  const { homeRef, aboutRef, projectRef, contactRef } = refList;

  useEffect(() => {
    if (window.location.pathname == "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <div ref={homeRef}></div>
      <Home />
      <div ref={aboutRef}></div>
      <Suspense fallback="">
        <About contactRef={contactRef} />
      </Suspense>
      <div ref={projectRef}></div>
      <Suspense fallback="">
        <Projects />
      </Suspense>
      <div ref={contactRef}></div>
      <Suspense fallback="">
        <Contacts />
      </Suspense>
    </>
  );
};

export default memo(Homepage);
