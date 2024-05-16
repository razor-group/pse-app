import * as React from "react";
const SvgMessage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={16} height={12} x={4} y={6} stroke={props.color} rx={2} />
    <path stroke={props.color} d="m4 9 7.106 3.553a2 2 0 0 0 1.788 0L20 9" />
  </svg>
);
export default SvgMessage;
