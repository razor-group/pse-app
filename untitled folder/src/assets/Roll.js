import * as React from "react";
const SvgRoll = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M5 15.5c5.5 0 5.5-6.5 0-7m12 7c5.5 0 5.5-6.5 0-7m-6 7c5.5 0 5.5-6.5 0-7m6 7H4.5m12.5-7H5"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M4.5 15.5a2 2 0 1 1 1.932-2.518"
    />
  </svg>
);
export default SvgRoll;
