import * as React from "react";
const SvgPercent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="M18 6 6 18" />
    <circle cx={7} cy={8} r={3.5} stroke={props.color} />
    <circle cx={17} cy={16} r={3.5} stroke={props.color} />
  </svg>
);
export default SvgPercent;
