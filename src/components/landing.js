import React, { useState, useEffect } from "react";
import "../css/landing.css";
import Hero from "./hero";
import Navbar from "./navbar";
import Social from "./social";
import SocialTwo from "./socialTwo";
import ProjectCards from "./ProjectCards";
import Aboutme from "./Aboutme";
import SayHello from "./SayHello";
import SocialFoot from "./SocialFoot";
import Loading from "./Loading";
// const data = require("../data/ProjectsCard.json");

function Landing() {
  const [data, setCard] = useState();
  useEffect(() => {
    fetch(`https://nishantjoshi.com/ProjectsCard.json`)
      .then((res) => res.json())
      .then((gotdata) => setCard(gotdata));
    // setCard(require("../data/ProjectsCard.json"));
  }, []);

  if (data === undefined) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <Navbar data={data} />
      <Social data={data} />
      <SocialTwo data={data} />
      <div className="app2" id="app2">
        <Hero data={data} />
        <Aboutme data={data} />
        <ProjectCards data={data} />
        <SayHello data={data} />
        <SocialFoot data={data} />
      </div>
    </>
  );
}
export default Landing;
