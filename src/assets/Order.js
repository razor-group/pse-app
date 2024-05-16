import * as React from "react";
const SvgOrder = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={14} height={17} x={5} y={4} stroke={props.color} rx={2} />
    <path stroke={props.color} strokeLinecap="round" d="M9 9h6m-6 4h6m-6 4h4" />
  </svg>
);
export default SvgOrder;
