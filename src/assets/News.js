import * as React from "react";
const SvgNews = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={14} height={14} x={5} y={5} stroke={props.color} rx={3} />
    <path stroke={props.color} strokeLinecap="round" d="M5 10h14" />
  </svg>
);
export default SvgNews;
