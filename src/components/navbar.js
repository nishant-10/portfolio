import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "../App.css";
import "../css/nav.css";
let status = false;
function Navbar() {
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
      <div ref={box}>
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
      </div>
    </>
  );
}
export default Navbar;
function useOutsideAlerter(ref) {
  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) {
      console.log(status);
      if (ref.current && !ref.current.contains(event.target) && status) {
        console.log("you just clicked outside of box!");
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
