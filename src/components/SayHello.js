import React from "react";
import "../css/sayhello.css";
import { useData } from "../contexts/data_context";
function SayHello() {
  const { homepage_data } = useData()
  return (
    <>
      <div className="sayHelloSection" id="sayHelloSection">
        <h1 className="sayHelloTitleArea">
          <p className="sayHelloPara sayHelloTitleNumber">04. </p>
          <p className="sayHelloPara sayHelloTitle">What's Next?</p>
        </h1>
        <div className="sayHelloContent">
          <p className="sayHelloContentTitle">Get In Touch</p>
          <p className="sayHelloContentPara">
            Hit me up on my socials!
          </p>
          <a
            className="sayHelloContentButton"
            href={homepage_data.Socials.LinkedIn}
            target="_blank"
            rel="noreferrer"
          >
            Say Hello!
          </a>
        </div>
      </div>
    </>
  );
}
export default SayHello;
