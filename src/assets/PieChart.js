import * as React from "react";
const SvgPieChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={9} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M12 12h9m-9-9v8.938c0 .04.016.078.044.106L18 18"
    />
  </svg>
);
export default SvgPieChart;
