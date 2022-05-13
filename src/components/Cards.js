import React from "react";
import "../css/cards.css";
// const data = require("../data/ProjectsCard.json");
function Cards(props) {
  return (
    <>
      {props.data.projects.slice(0, props.visiblecards).map((projectitem) => (
        <div className="singleCard" key={projectitem.id}>
          <div className="cardTop" key={projectitem.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-folder cardicon"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github cardicon projectGitLink"
              onClick={(e) => {
                e.preventDefault();
                window.open(projectitem.GitLink, "_blank");
              }}
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <div
            className="cardContent"
            onClick={(e) => {
              e.preventDefault();
              window.open(projectitem.DemoLink, "_blank");
            }}
          >
            <p className="cardp projectTitle">{projectitem.Title}</p>
            <p className="cardp projectSubtitle">{projectitem.Description}</p>
          </div>
          <div className="cardTags">
            {projectitem.Tags.map((Tag) => (
              <h1 className="projectTag" key={Tag}>
                {Tag}
              </h1>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
export default Cards;
