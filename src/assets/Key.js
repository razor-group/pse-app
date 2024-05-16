import * as React from "react";
const SvgKey = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={9} cy={14} r={4} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="m12 11 3.5-3.5M17 6l-1.5 1.5m0 0L18 10"
    />
  </svg>
);
export default SvgKey;
