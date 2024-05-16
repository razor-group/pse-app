import * as React from "react";
const SvgOn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={14} height={10} x={5} y={7} stroke={props.color} rx={2} />
    <rect width={5} height={6} x={12} y={9} fill={props.color} rx={1} />
  </svg>
);
export default SvgOn;
