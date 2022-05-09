import React from "react";
import "../css/projectcards.css";
import Cards from "./Cards";
const data = require("../data/ProjectsCard.json");
function ProjectCards() {
  return (
    <>
      <div className="cardArea">
        <h1 className="cah1 cardAreaTitle">Noteworthy Projects</h1>
        <h1 className="cah1 cardAreaSubTitle">Made for colleges</h1>
        <div className="cards">
          <Cards />
        </div>
      </div>
    </>
  );
}
export default ProjectCards;
