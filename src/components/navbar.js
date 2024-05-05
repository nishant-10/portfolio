import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "../App.css";
import "../css/nav.css";
import { useData } from "../contexts/data_context";
let status = false;
function Navbar() {
  let { homepage_data } = useData();
  const [isHamClicked, hamClick] = useState(false);
  const box = useRef(null);
  useOutsideAlerter(box);
  const changeStyles = () => {
    let element2 = document.getElementById("app2");
    let element = document.getElementById("hamMenu");
    var t = ReactDOM.findDOMNode(element);
    if (!isHamClicked || !status) {
      t.style.transform = "TranslateX(0)";

      t.style.zIndex = "20";
      element2.style.filter = "blur(4px)";
      hamClick(true);
      status = true;
    } else if (isHamClicked || status) {
      t.style.transform = "TranslateX(100%)";
      element2.style.filter = "blur(0px)";
      hamClick(false);
      status = false;
    }
  };
  return (
    <>
      <nav className="nav">
        <img src={require("../icons8-n-100.png")} alt="" srcSet="" />
        <ul>
          <li>
            <a href="#heroSection">
              <p>01. </p> Home
            </a>
          </li>
          <li>
            <a href="#cardArea">
              <p>02. </p>Projects
            </a>
          </li>
          <li>
            <a href="#aboutContainer">
              <p>03. </p> Experience
            </a>
          </li>
          <li>
            <a href="#showMoreButt">
              <p>04. </p>Contact
            </a>
          </li>
          <li>
            <a
              className="resumebutton"
              href={homepage_data.Socials.Resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div ref={box}>
        <div className="hamburger" onClick={changeStyles}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id="hamMenu" className="hamMenu">
          <ul>
            <li>
              <a href="#heroSection">
                <p>01. </p> Home
              </a>
            </li>
            <li>
              <a href="#cardArea">
                <p>02. </p>Projects
              </a>
            </li>
            <li>
              <a href="#aboutContainer">
                <p>03. </p> Experience
              </a>
            </li>
            <li>
              <a href="#showMoreButt">
                <p>04. </p>Contact
              </a>
            </li>
            <li>
              <a
                className="resumebutton"
                href={homepage_data.Socials.Resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
function useOutsideAlerter(ref) {
  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target) && status) {
        let element2 = document.getElementById("app2");
        let element = document.getElementById("hamMenu");
        var t = ReactDOM.findDOMNode(element);
        t.style.transform = "TranslateX(100%)";
        element2.style.filter = "blur(0px)";
        status = false;
      }
    }

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);
}
