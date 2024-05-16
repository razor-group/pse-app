import * as React from "react";
const SvgLineOutAlt = (props) => (
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
      x={9}
      y={15}
      stroke={props.color}
      rx={2}
      transform="rotate(90 9 15)"
    />
    <path stroke={props.color} d="m18 3 3 4-3 4" />
    <path
      stroke={props.color}
      d="M21 7h-7c-3.771 0-5.657 0-6.828 1.172C6 9.343 6 11.229 6 15"
    />
  </svg>
);
export default SvgLineOutAlt;
