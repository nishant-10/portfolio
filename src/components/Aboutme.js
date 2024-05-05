import React from "react";
import "../css/aboutme.css";
// import photo from "../img/compress3.jpg";
import { useData } from "../contexts/data_context";
function Aboutme() {
  const { homepage_data } = useData()
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
            <p className="aboutPara">{homepage_data.AllText.AboutParaOne}</p>
            <p className="aboutPara">{homepage_data.AllText.AboutParaTwo}</p>
            <p className="aboutPara">{homepage_data.AllText.AboutParaThree}</p>
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
                  homepage_data.AllText.AboutSkills.map((item) => {
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
            <img className="myimage" src='/compress3.jpg'></img>
            <div className="afterSquare" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
