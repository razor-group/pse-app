import * as React from "react";
const SvgMove = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m17 15-5 5-5-5m10-6-5-5-5 5" />
  </svg>
);
export default SvgMove;
