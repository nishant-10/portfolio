import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Landing from "./components/landing";
import "./App.css";

function App() {
  const override = css`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <PropagateLoader color={"#64FFDA"} size={30} css={override} />
      ) : (
        <>
          <Landing />
        </>
      )}
    </div>
  );
}

export default App;
