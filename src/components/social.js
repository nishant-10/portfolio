import React from "react";
import "../css/social.css";
import { useData } from "../contexts/data_context";
function Social() {
  const {homepage_data} = useData();
  return (
    <>
      <div className="lnk">
        <ul className="emaillist">
          <li className="last">
            <a
              className="emailatag"
              href={"mailto:" + homepage_data.Socials.Email}
              target="_blank"
              rel="noreferrer"
            >
              {homepage_data.Socials.Email}
            </a>
          </li>
          <li>――――――――――――――――――――――</li>
        </ul>
      </div>
    </>
  );
}
export default Social;
