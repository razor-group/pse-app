import * as React from "react";
const SvgCompassNorth = (props) => (
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
      d="m7.558 20.378 4.397-9.283a.05.05 0 0 1 .09 0l4.397 9.283a.05.05 0 0 1-.065.067L12.02 18.51a.05.05 0 0 0-.04 0l-4.357 1.936a.05.05 0 0 1-.065-.067Z"
    />
    <path stroke={props.color} d="M12 11.5v7" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M10.5 8.5V3.68c0-.05.067-.069.093-.025l2.814 4.69c.026.044.093.025.093-.026V3.5"
    />
  </svg>
);
export default SvgCompassNorth;
