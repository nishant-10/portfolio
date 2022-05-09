import React from "react";
import "../css/hero.css";
function Hero() {
  return (
    <>
      <div className="heroSection">
        <div className="herotext">
          <p>Hi, my name is </p>
          <h1 className="name">Nishant Joshi.</h1>
          <h1 className="built">I build things on web.</h1>
          <span>
            <h5 className="desc">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at
              <h5
                style={{
                  display: "inline",
                  color: "#64ffda",
                }}
              >
                &nbsp;Upstatement
              </h5>
              .
            </h5>
            <button
              className="gitbutton"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.linkedin.com/in/nishant-joshi-831a8715b/",
                  "_blank"
                );
              }}
            >
              Checkout my LinkedIn for more !
            </button>
          </span>
        </div>
      </div>
      {/* <div className="lnk">
        <ul>
          <li>
            <a href="#">nishantjoshi863@gmail.com</a>
          </li>
        </ul>
      </div> */}
    </>
  );
}
export default Hero;
