import * as React from "react";
const SvgTimeProgress = (props) => (
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
      d="M5.282 5.282A9.5 9.5 0 1 0 12 2.5m0 9.5L7 7m5-4.5V5m9 7h-2m-7 7v2m-7-9H3"
    />
  </svg>
);
export default SvgTimeProgress;
