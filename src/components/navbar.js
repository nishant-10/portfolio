import React from "react";
import "../App.css";
function Navbar() {
  return (
    <nav className="nav">
      <img src={require("../icons8-n-100.png")} alt="" srcset="" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
