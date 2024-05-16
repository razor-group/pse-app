import * as React from "react";
const SvgStructure = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={16} height={7} x={4} y={4} stroke={props.color} rx={1} />
    <path
      stroke={props.color}
      d="M4 16c0-.943 0-1.414.293-1.707C4.586 14 5.057 14 6 14h4v4c0 .943 0 1.414-.293 1.707C9.414 20 8.943 20 8 20H6c-.943 0-1.414 0-1.707-.293C4 19.414 4 18.943 4 18zm10-2h4c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v2c0 .943 0 1.414-.293 1.707C19.414 20 18.943 20 18 20h-2c-.943 0-1.414 0-1.707-.293C14 19.414 14 18.943 14 18z"
    />
  </svg>
);
export default SvgStructure;
