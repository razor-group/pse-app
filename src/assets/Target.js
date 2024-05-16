import * as React from "react";
const SvgTarget = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={7} stroke={props.color} />
    <circle cx={12} cy={12} r={2} fill={props.color} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M7.05 7.05 4 4m12.95 3.05L20 4m0 16-3.05-3.05M4 20l3.05-3.05"
    />
  </svg>
);
export default SvgTarget;
