import * as React from "react";
const SvgMenu1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={16}
      height={5}
      x={4}
      y={5}
      stroke={props.color}
      strokeLinejoin="round"
      rx={1}
    />
    <rect
      width={16}
      height={5}
      x={4}
      y={14}
      stroke={props.color}
      strokeLinejoin="round"
      rx={1}
    />
  </svg>
);
export default SvgMenu1;
