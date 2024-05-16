import * as React from "react";
const SvgSortUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} strokeLinecap="round" d="M5 16h8m-8-4h6M5 8h4" />
    <path stroke={props.color} d="m19 6 3 3m-3-3-3 3m3-3v12" />
  </svg>
);
export default SvgSortUp;
