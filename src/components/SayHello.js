import React from "react";
import "../css/sayhello.css";
function SayHello() {
  return (
    <>
      <div className="sayHelloSection">
        <h1 className="sayHelloTitleArea">
          <p className="sayHelloPara sayHelloTitleNumber">04. </p>
          <p className="sayHelloPara sayHelloTitle">What's Next?</p>
        </h1>
        <div className="sayHelloContent">
          <p className="sayHelloContentTitle">Get In Touch</p>
          <p className="sayHelloContentPara">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button className="sayHelloContentButton">Say Hello!</button>
        </div>
      </div>
    </>
  );
}
export default SayHello;
