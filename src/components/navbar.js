import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../App.css";
import "../css/nav.css";
function Navbar() {
  const [isHamClicked, hamClick] = useState(false);
  const changeStyles = () => {
    let element2 = document.getElementById("app2");
    let element = document.getElementById("hamMenu");
    var t = ReactDOM.findDOMNode(element);
    if (!isHamClicked) {
      t.style.transform = "TranslateX(0)";
      t.style.zIndex = "20";
      element2.style.filter = "blur(4px)";
      hamClick(true);
    } else {
      t.style.transform = "TranslateX(100%)";
      element2.style.filter = "blur(0px)";
      hamClick(false);
    }
  };
  return (
    <>
      <nav className="nav">
        <img src={require("../icons8-n-100.png")} alt="" srcSet="" />
        <ul>
          <li>
            <a href="#news">
              <p>01. </p> Experience
            </a>
          </li>
          <li>
            <a href="#news">
              <p>02. </p>Work
            </a>
          </li>
          <li>
            <a href="#contact">
              <p>03. </p>Contact
            </a>
          </li>
          <li>
            <a href="#home">
              <p>04. </p>About
            </a>
          </li>
          <li>
            <button className="resumebutton">Resume</button>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={changeStyles}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id="hamMenu" className="hamMenu">
        <ul>
          <li>
            <a href="#news">
              <p>01. </p> Experience
            </a>
          </li>
          <li>
            <a href="#news">
              <p>02. </p>Work
            </a>
          </li>
          <li>
            <a href="#contact">
              <p>03. </p>Contact
            </a>
          </li>
          <li>
            <a href="#home">
              <p>04. </p>About
            </a>
          </li>
          <li>
            <button className="resumebutton">Resume</button>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
