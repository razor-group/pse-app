import * as React from "react";
const SvgViewAlt1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={3.5} stroke={props.color} />
    <path stroke={props.color} d="M21 12s-1-8-9-8-9 8-9 8" />
  </svg>
);
export default SvgViewAlt1;
