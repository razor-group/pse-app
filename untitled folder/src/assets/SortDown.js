import * as React from "react";
const SvgSortDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} strokeLinecap="round" d="M5 8h8m-8 4h6m-6 4h4" />
    <path stroke={props.color} d="m19 18 3-3m-3 3-3-3m3 3V6" />
  </svg>
);
export default SvgSortDown;
