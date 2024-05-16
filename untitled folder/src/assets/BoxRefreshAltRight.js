import * as React from "react";
const SvgBoxRefreshAltRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m12 12 4 4-4 4" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M13 8h4m-1 8H8a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4h1"
    />
  </svg>
);
export default SvgBoxRefreshAltRight;
