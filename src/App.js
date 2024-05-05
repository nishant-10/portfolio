import React, { useState, useEffect } from "react";

import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Landing from "./components/landing";
import "./App.css";
import ReactDOM from "react-dom";

function App() {
  // const [isHamClicked, hamClick] = useState(true);
  const appCLick = () => {
    // return;
    let element = document.getElementById("hamMenu");
    let element2 = document.getElementById("app2");
    var t = ReactDOM.findDOMNode(element);

    // t.style.transform = "TranslateX(100%)";
  };
  const override = css`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <div className="App">
      {/* {loading ? (
        <PropagateLoader color={"#64FFDA"} size={30} css={override} />
      ) : (
       
      )} */}
      <>
        <div onClick={appCLick}>
          <Landing />
        </div>
      </>
    </div>
  );
}

export default App;
