import * as React from "react";
const SvgChartAlt = (props) => (
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
      d="m17 9-3.044 4.566a1 1 0 0 1-1.727-.107l-.458-.918a1 1 0 0 0-1.727-.107L7 17"
    />
    <rect width={18} height={18} x={3} y={3} stroke={props.color} rx={2} />
  </svg>
);
export default SvgChartAlt;
