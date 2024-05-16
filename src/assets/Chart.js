import * as React from "react";
const SvgChart = (props) => (
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
      d="M8 10v6m4-4v4m4-8v8"
    />
    <rect width={18} height={16} x={3} y={4} stroke={props.color} rx={2} />
  </svg>
);
export default SvgChart;
