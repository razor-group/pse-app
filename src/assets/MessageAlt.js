import * as React from "react";
const SvgMessageAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={16} height={12} x={4} y={6} stroke={props.color} rx={2} />
    <path
      fill={props.color}
      d="M11.106 12.553 4 9v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7.106 3.553a2 2 0 0 1-1.788 0"
    />
  </svg>
);
export default SvgMessageAlt;
