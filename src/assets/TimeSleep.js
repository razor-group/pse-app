import * as React from "react";
const SvgTimeSleep = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={8.5} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 8.5h6.638c.133 0 .2.162.106.256l-6.488 6.488a.15.15 0 0 0 .106.256H15.5"
    />
  </svg>
);
export default SvgTimeSleep;
