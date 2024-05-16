import * as React from "react";
const SvgPils = (props) => (
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
      strokeLinejoin="round"
      d="m9 16 7-7a3.536 3.536 0 0 0-5-5l-7 7a3.536 3.536 0 0 0 5 5"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.5 12.5a9.52 9.52 0 0 1-5-5v0"
    />
    <circle
      cx={16.5}
      cy={16.5}
      r={4}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19 14-5 5"
    />
  </svg>
);
export default SvgPils;
