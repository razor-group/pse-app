import * as React from "react";
const SvgRefresh = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m14 15-4 4 4 4" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M5.938 15.5a7 7 0 1 1 5.01 3.42"
    />
  </svg>
);
export default SvgRefresh;
