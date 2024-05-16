import * as React from "react";
const SvgTablet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={15}
      height={19}
      x={4.5}
      y={2.5}
      stroke={props.color}
      rx={2.5}
    />
    <path stroke={props.color} d="M15 18H9" />
  </svg>
);
export default SvgTablet;
