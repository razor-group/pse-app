import * as React from "react";
const SvgCandlestick = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} strokeLinecap="round" d="M7.5 3.5v3m0 8v4" />
    <path
      stroke={props.color}
      d="M6.8 6.5a1.3 1.3 0 0 0-1.3 1.3v5.4a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 0 1.3-1.3V7.8a1.3 1.3 0 0 0-1.3-1.3z"
    />
    <path stroke={props.color} strokeLinecap="round" d="M16.5 6.5v5m0 5v4" />
    <path
      stroke={props.color}
      d="M15.8 11.5a1.3 1.3 0 0 0-1.3 1.3v2.4a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 0 1.3-1.3v-2.4a1.3 1.3 0 0 0-1.3-1.3z"
    />
  </svg>
);
export default SvgCandlestick;
