import * as React from "react";
const SvgLineOut = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M9 15v3c0 .943 0 1.414-.293 1.707C8.414 20 7.943 20 7 20H6c-.943 0-1.414 0-1.707-.293C4 19.414 4 18.943 4 18v-1c0-.943 0-1.414.293-1.707C4.586 15 5.057 15 6 15zm6-11h5v5m0-5L9 15"
    />
  </svg>
);
export default SvgLineOut;
