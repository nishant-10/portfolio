import React from "react";
import "../css/aboutme.css";
import photo from "../img/compress3.jpeg";
function Aboutme(props) {
  return (
    <div className="aboutContainer" id="aboutContainer">
      <h1 className="aboutTitle">
        <p className="aboutTitleNumber">01. </p>
        <p className="aboutTitleText">About Me</p>
        <p className="aboutLine">――――――――――――――――――――――</p>
      </h1>
      <div className="aboutBody">
        <div className="aboutGrid">
          <div className="aboutContent">
            <p className="aboutPara">{props.data.AllText.AboutParaOne}</p>
            <p className="aboutPara">{props.data.AllText.AboutParaTwo}</p>
            <p className="aboutPara">{props.data.AllText.AboutParaThree}</p>
            <p className="aboutPara">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="aboutSkills">
              <ul className="aboutSkillul">
                {
                  /* <li>CSS</li>
                <li>HTML</li>
                <li>Node</li>
                <li>JS</li>
                <li>Python</li>
                <li>SQL</li> */
                  props.data.AllText.AboutSkills.map((item) => {
                    return (
                      <>
                        <li className="skillLi" key={item}>
                          {item}
                        </li>
                      </>
                    );
                  })
                }
              </ul>
            </div>
          </div>
          <div className="aboutPhoto">
            <img className="myimage" src={photo}></img>
            <div className="afterSquare" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
