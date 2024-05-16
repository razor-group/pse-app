import * as React from "react";
const SvgSearchAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={11} cy={11} r={6} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M11 8a3 3 0 0 0-3 3m12 9-3-3"
    />
  </svg>
);
export default SvgSearchAlt;
