import * as React from "react";
const SvgExpandDownDouble = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m18 12-6 6-6-6m12-6-6 6-6-6" />
  </svg>
);
export default SvgExpandDownDouble;
