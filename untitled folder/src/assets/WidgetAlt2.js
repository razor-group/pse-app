import * as React from "react";
const SvgWidgetAlt2 = (props) => (
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
      stroke={props.color}
      strokeLinecap="round"
      rx={1}
      transform="matrix(1 0 0 -1 14 10)"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M10 14h4c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v2c0 .943 0 1.414-.293 1.707C15.414 20 14.943 20 14 20h-4zm0-4c0-.943 0-1.414-.293-1.707C9.414 8 8.943 8 8 8H6c-.943 0-1.414 0-1.707.293C4 8.586 4 9.057 4 10v4h6zm0 10H6c-.943 0-1.414 0-1.707-.293C4 19.414 4 18.943 4 18v-4h6z"
    />
  </svg>
);
export default SvgWidgetAlt2;
