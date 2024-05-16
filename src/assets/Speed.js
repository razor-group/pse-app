import * as React from "react";
const SvgSpeed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="M3.5 14a8.5 8.5 0 0 1 17 0"
    />
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="M9.5 15a2.5 2.5 0 1 1 5 0"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m13.5 12.5 2-3m5 4.5v.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V14"
    />
  </svg>
);
export default SvgSpeed;
