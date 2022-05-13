import React from "react";
import "../css/social.css";
function Social(props) {
  return (
    <>
      <div className="lnk">
        <ul className="emaillist">
          <li className="last">
            <a
              className="emailatag"
              href={"mailto:" + props.data.Socials.Email}
              target="_blank"
              rel="noreferrer"
            >
              {props.data.Socials.Email}
            </a>
          </li>
          <li>――――――――――――――――――――――</li>
        </ul>
      </div>
    </>
  );
}
export default Social;
