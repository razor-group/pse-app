import * as React from "react";
const SvgDoughnutChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={9} stroke={props.color} />
    <circle cx={12} cy={12} r={4} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M12 3v4.5M18 18l-3-3m3-9-3 3M3 12h4.5"
    />
  </svg>
);
export default SvgDoughnutChart;
