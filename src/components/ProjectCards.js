import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../css/projectcards.css";
import Cards from "./Cards";
const data = require("../data/ProjectsCard.json");
function ProjectCards() {
  const [visible, setVisible] = useState(2);
  const [allCardsShown, setallCardsShown] = useState(false);
  const morecards = () => {
    let element = document.getElementById("showMoreButt");
    // var t = ReactDOM.findDOMNode(element);
    // element.innerText = "SHOW LESS";

    if (visible < data.projects.length) {
      element.innerText = "SHOW MORE";
      setVisible((prevValue) => prevValue + 2);
    }
    if (visible >= data.projects.length - 2) {
      if (allCardsShown) {
        element.innerText = "SHOW MORE";
        setallCardsShown(false);
        setVisible(2);
      }
      if (!allCardsShown) {
        setallCardsShown(true);
        element.innerText = "SHOW LESS";
        setVisible((prevValue) => prevValue + 2);
      }
    }
  };
  return (
    <>
      <div className="cardArea">
        <h1 className="cah1 cardAreaTitle">Noteworthy Projects</h1>
        <h1 className="cah1 cardAreaSubTitle">Made for colleges</h1>
        <div className="cards">
          <Cards visiblecards={visible} />
        </div>
        <button id="showMoreButt" onClick={morecards}>
          SHOW MORE
        </button>
      </div>
    </>
  );
}
export default ProjectCards;
