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
function Landing() {
  return (
    <>
      <Navbar />
      <Social />
      <SocialTwo />
      <div className="app2" id="app2">
        <Hero />
        <Aboutme />
        <ProjectCards />
        <SayHello />
        <SocialFoot />
      </div>
    </>
  );
}
export default Landing;
