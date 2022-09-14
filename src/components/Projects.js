import React, { memo } from "react";
import { Link } from "react-router-dom";
import { projectData } from "../projectData";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <div className="me-box">
        <h1 className="sub-heading">personal projects</h1>
        <p className="info center">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      {projectData.map((data) => (
        <div key={data.id} className="info-box">
          <div className="box">
            <LazyLoadImage
              src={data.path}
              placeholderSrc={data.path}
              alt={data.name}
              effect="blur"
            />
          </div>
          <div className="box">
            <h2 className="title-heading">{data.name}</h2>
            <div className="">
              <p className="info">{data.description.split(".")[0]}</p>
            </div>
            <Link to={`projects/${data.id}`} className="btn">
              case study
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Projects);
