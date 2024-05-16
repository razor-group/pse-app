import * as React from "react";
const SvgLineInAlt = (props) => (
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
      x={15}
      y={9}
      stroke={props.color}
      rx={2}
      transform="rotate(-90 15 9)"
    />
    <path stroke={props.color} d="m6 21-3-4 3-4" />
    <path
      stroke={props.color}
      d="M3 17h7c3.771 0 5.657 0 6.828-1.172C18 14.657 18 12.771 18 9"
    />
  </svg>
);
export default SvgLineInAlt;
