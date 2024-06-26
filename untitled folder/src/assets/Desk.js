import * as React from "react";
const SvgDesk = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={16} height={16} x={4} y={5} stroke={props.color} rx={2} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M16 2v4c0 .943 0 1.414-.293 1.707C15.414 8 14.943 8 14 8h-4c-.943 0-1.414 0-1.707-.293C8 7.414 8 6.943 8 6V2m1 12h6"
    />
  </svg>
);
export default SvgDesk;
