import React from "react";
import "../css/aboutme.css";
import photo from "../img/compress3.jpeg";
function Aboutme() {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">
        <p className="aboutTitleNumber">01. </p>
        <p className="aboutTitleText">About Me</p>
        <p className="aboutLine">――――――――――――――――――――――</p>
      </h1>
      <div className="aboutBody">
        <div className="aboutGrid">
          <div className="aboutContent">
            <p className="aboutPara">
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML and CSS!
            </p>
            <p className="aboutPara">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p className="aboutPara">
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node and React.
            </p>
            <p className="aboutPara">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="aboutSkills">
              <ul className="aboutSkillul">
                <li>CSS</li>
                <li>HTML</li>
                <li>Node</li>
                <li>JS</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
          <div className="aboutPhoto">
            <img className="myimage" src={photo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
