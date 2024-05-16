import * as React from "react";
const SvgDarhboard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={6}
      height={6}
      x={4}
      y={4}
      stroke={props.color}
      strokeLinejoin="round"
      rx={1}
    />
    <rect
      width={6}
      height={6}
      x={4}
      y={14}
      stroke={props.color}
      strokeLinejoin="round"
      rx={1}
    />
    <rect
      width={6}
      height={6}
      x={14}
      y={14}
      stroke={props.color}
      strokeLinejoin="round"
      rx={1}
    />
    <rect
      width={6}
      height={6}
      x={14}
      y={4}
      stroke={props.color}
      strokeLinejoin="round"
      rx={1}
    />
  </svg>
);
export default SvgDarhboard;