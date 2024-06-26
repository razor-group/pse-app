import * as React from "react";
const SvgExpandRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m9 6 6 6-6 6" />
  </svg>
);
export default SvgExpandRight;
