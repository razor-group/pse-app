import * as React from "react";
const SvgBed = (props) => (
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
      d="M21.5 19.5v-11a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v11m-3 0v-8h-7a1 1 0 0 0-1 1v7"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.5 11.5h18v3h-19v-2a1 1 0 0 1 1-1"
    />
    <path
      fill={props.color}
      d="M10.5 13.5v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1"
    />
  </svg>
);
export default SvgBed;
