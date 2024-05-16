import * as React from "react";
const SvgRofl = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={9.5}
      stroke={props.color}
      strokeLinecap="round"
    />
    <path stroke={props.color} strokeLinecap="round" d="m16 8-8 3m0-3 8 3" />
    <path
      fill={props.color}
      d="M8 14.556c0-.052 0-.078.002-.1a.5.5 0 0 1 .454-.454c.022-.002.048-.002.1-.002h6.888c.052 0 .078 0 .1.002a.5.5 0 0 1 .454.454c.002.022.002.048.002.1V15a4 4 0 0 1-8 0z"
    />
  </svg>
);
export default SvgRofl;
