import * as React from "react";
const SvgTime = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={8.5} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M16.5 12h-4.25a.25.25 0 0 1-.25-.25V8.5"
    />
  </svg>
);
export default SvgTime;
