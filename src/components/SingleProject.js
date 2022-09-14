import React, { memo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projectData } from "../projectData";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleProject = () => {
  const { projectId } = useParams();
  const project = projectData.filter((data) => data.id == projectId);

  document.title = `Case Study of ${project[0].name}`;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div id="single-project">
      <div className="container">
        <div className="project-box">
          <div className="banner-heading">
            <h1>{project[0].name}</h1>
          </div>
          <div className="banner-info">
            <p>
              This page contains the case study of Yubter Web App which includes
              the Project Overview, Tools Used and Live Links to the official
              product.
            </p>
          </div>
          <div className="banner-btn">
            <a href={project[0].link} target="_blank" rel="noreferrer">
              live link
            </a>
          </div>
        </div>
        <div style={{ marginTop: "42vh" }}>
          <img />
          <LazyLoadImage
            style={{ width: "100%" }}
            src={"/" + project[0].path}
            placeholderSrc={"/" + project[0].path}
            alt={project[0].name}
            effect="blur"
          />
          <div className="sub-container">
            <h1 className="title-heading">Project Overview</h1>
            <p className="info">{project[0].description}</p>
          </div>
          <div className="sub-container">
            <h1 className="title-heading">Tools Used</h1>
            <div className="skills">
              {project[0].skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="sub-container" style={{ marginBottom: "50px" }}>
            <h1 className="title-heading">See Live</h1>
            <div className="button-box">
              <a
                className="btn"
                href={project[0].link}
                target="_blank"
                rel="noreferrer"
              >
                Live link
              </a>
              <Link className="btn" to="/">
                Go back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SingleProject);
