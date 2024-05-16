import * as React from "react";
const SvgLineIn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M15 9V6c0-.943 0-1.414.293-1.707C15.586 4 16.057 4 17 4h1c.943 0 1.414 0 1.707.293C20 4.586 20 5.057 20 6v1c0 .943 0 1.414-.293 1.707C19.414 9 18.943 9 18 9zM9 20H4v-5m0 5L15 9"
    />
  </svg>
);
export default SvgLineIn;
