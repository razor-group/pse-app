import * as React from "react";
const SvgStopAndPlay = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.427 11.126 4.594 7.33A.4.4 0 0 0 4 7.68v8.64a.4.4 0 0 0 .594.35l6.833-3.796a1 1 0 0 0 0-1.748"
    />
    <path stroke={props.color} strokeLinecap="round" d="M16 17V7m4 10V7" />
  </svg>
);
export default SvgStopAndPlay;
