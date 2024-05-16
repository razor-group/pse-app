import * as React from "react";
const SvgEMail = (props) => (
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
      d="M21 12a9 9 0 1 0-6.67 8.693"
    />
    <circle cx={12} cy={12} r={4} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M16 9v4.5a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0 2.5-2.5V12"
    />
  </svg>
);
export default SvgEMail;
