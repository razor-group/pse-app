import * as React from "react";
const SvgSortlist = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} strokeLinecap="round" d="M5 8h7m-7 4h7m-7 4h7" />
    <path stroke={props.color} d="m19 20 3-3m-3 3-3-3m3 3V4m0 0-3 3m3-3 3 3" />
  </svg>
);
export default SvgSortlist;
