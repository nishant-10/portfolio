import React from "react";
import "../css/hero.css";
import { useData } from "../contexts/data_context";
function Hero() {
  const { homepage_data } = useData();
  return (
    <>
      <div className="heroSection" id="heroSection">
        <div className="herotext">
          <p>Hi, my name is </p>
          <h1
            className="name neonText"
            onClick={() => {
              window.open(`${homepage_data.Socials.LinkedIn ?? "#"}`);
            }}
          >
            &lt; Nishant Joshi /&gt;
          </h1>
          <h1 className="built">I build things on web.</h1>
          <span>
            <h5 className="desc">
              {homepage_data.AllText.heroDescription}
              <span
                style={{
                  display: "inline",
                  color: "#64ffda",
                  fontWeight: "bold",
                }}
              >
                &nbsp;{homepage_data.AllText.heroDescriptionKeyword}
              </span>
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
