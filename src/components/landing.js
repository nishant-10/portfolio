import React from "react";
import "../css/landing.css";
import Hero from "./hero";
import Navbar from "./navbar";
import Social from "./social";
import SocialTwo from "./socialTwo";
import ProjectCards from "./ProjectCards";
import Aboutme from "./Aboutme";
import SayHello from "./SayHello";
import SocialFoot from "./SocialFoot";
const data = require("../data/ProjectsCard.json");
function Landing() {
  return (
    <>
      <Navbar />
      <Social data={data} />
      <SocialTwo data={data} />
      <div className="app2" id="app2">
        <Hero />
        <Aboutme />
        <ProjectCards data={data} />
        <SayHello />
        <SocialFoot data={data} />
      </div>
    </>
  );
}
export default Landing;
