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
import { DataContextProvider } from "../contexts/data_context";
import { EmojiReactions } from "./Reactions";
// const data = require("../data/ProjectsCard.json");
function Landing() {
  const [data, setCard] = useState();
  // useEffect(() => {
  //   fetch(`/data/ProjectsCard.json`)
  //     .then((res) => res.json())
  //     .then((gotdata) => setCard(gotdata));
  //   // setCard(require("../data/ProjectsCard.json"));
  // }, []);

  // if (data === undefined) {
  //   return (
  //     <>
  //       <Loading />
  //     </>
  //   );
  // }
  return (
    <>
      <DataContextProvider>
        <Navbar />
        <Social />
        <SocialTwo />
        <div className="app2" id="app2">
          <Hero />
          <Aboutme />
          <ProjectCards />
          {/* <EmojiReactions /> */}
          <SayHello />
          <SocialFoot />
        </div>
      </DataContextProvider>
    </>
  );
}
export default Landing;
