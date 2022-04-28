import React, { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Navbar from "./components/navbar";
//import logo from "./logo.svg";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? <PropagateLoader color={"#64FFDA"} size={30} /> : <Navbar />}
    </div>
  );
}

export default App;
