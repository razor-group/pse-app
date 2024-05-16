import * as React from "react";
const SvgCalendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={18} height={15} x={3} y={6} stroke={props.color} rx={2} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M3 11h18M9 16h6M8 3v4m8-4v4"
    />
  </svg>
);
export default SvgCalendar;
