import * as React from "react";
const SvgGpsFixed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={7} stroke={props.color} />
    <circle cx={12} cy={12} r={2} fill={props.color} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M12 5V3m7 9h2m-9 9v-2m-9-7h2"
    />
  </svg>
);
export default SvgGpsFixed;
