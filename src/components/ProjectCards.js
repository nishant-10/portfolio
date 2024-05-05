import React, { useState } from "react";
import "../css/projectcards.css";
import Cards from "./Cards";
import { useData } from "../contexts/data_context";
// const data = require("../../public/data/ProjectsCard.json");
const data = [];

function ProjectCards() {
  const { homepage_data } = useData()
  const [visible, setVisible] = useState(3);

  const [allCardsShown, setallCardsShown] = useState(false);
  const morecards = () => {
    let element = document.getElementById("showMoreButt");

    if (visible < homepage_data.projects.length) {
      element.innerText = "SHOW MORE";
      setVisible((prevValue) => prevValue + 3);
    }
    if (visible >= homepage_data.projects.length - 3) {
      if (allCardsShown) {
        element.innerText = "SHOW MORE";
        setallCardsShown(false);
        setVisible(3);
      }
      if (!allCardsShown) {
        setallCardsShown(true);
        element.innerText = "SHOW LESS";
        setVisible((prevValue) => prevValue + 3);
      }
    }
  };
  return (
    <>
      <div className="cardArea" id="cardArea">
        <h1 className="cah1 cardAreaTitle">03. Noteworthy Projects</h1>
        <h1 className="cah1 cardAreaSubTitle">Personal & Academic</h1>
        <h1 className="cah1 cardAreaInfo">
          Click on card for a demo and Git icon for repository
        </h1>
        <div className="cards">
          <Cards visiblecards={visible} data={homepage_data} />
        </div>
        <div className="showMoreButtonArea">
          <button
            id="showMoreButt"
            className="showMoreButt"
            onClick={morecards}
          >
            SHOW MORE
          </button>
        </div>
      </div>
    </>
  );
}
export default ProjectCards;
