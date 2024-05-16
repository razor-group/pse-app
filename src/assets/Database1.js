import * as React from "react";
const SvgDatabase1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <ellipse cx={12} cy={7} stroke={props.color} rx={7} ry={3} />
    <path
      stroke={props.color}
      strokeLinecap="square"
      d="M5 13v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4"
    />
    <path stroke={props.color} d="M5 7v5c0 1.657 3.134 3 7 3s7-1.343 7-3V7" />
  </svg>
);
export default SvgDatabase1;
