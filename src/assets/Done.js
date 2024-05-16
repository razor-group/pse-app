import * as React from "react";
const SvgDone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m5 14 4 3 9-11" />
  </svg>
);
export default SvgDone;
