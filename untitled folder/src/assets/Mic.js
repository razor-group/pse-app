import * as React from "react";
const SvgMic = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={6}
      height={11}
      x={9}
      y={3}
      stroke={props.color}
      strokeLinejoin="round"
      rx={3}
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 11a6.5 6.5 0 0 0 13 0M12 21v-2"
    />
  </svg>
);
export default SvgMic;
