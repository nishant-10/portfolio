import React from "react";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
function Loading() {
  const override = css`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
  return (
    <>
      <PropagateLoader color={"#64FFDA"} size={30} css={override} />
    </>
  );
}
export default Loading;
