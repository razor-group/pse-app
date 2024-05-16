import * as React from "react";
const SvgSortlistAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} strokeLinejoin="round" d="M5 8v8" />
    <path
      fill={props.color}
      d="M5.224 4.447 6.71 7.421A.4.4 0 0 1 6.353 8H3.647a.4.4 0 0 1-.358-.579l1.487-2.974a.25.25 0 0 1 .448 0m0 15.106 1.487-2.974A.4.4 0 0 0 6.353 16H3.647a.4.4 0 0 0-.358.579l1.487 2.974a.25.25 0 0 0 .448 0"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M11 8h8m-8 4h8m-8 4h8"
    />
  </svg>
);
export default SvgSortlistAlt;
