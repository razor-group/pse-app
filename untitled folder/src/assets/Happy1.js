import * as React from "react";
const SvgHappy1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={9.5}
      stroke={props.color}
      strokeLinecap="round"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M9.835 13.25a2.502 2.502 0 0 0 4.33 0"
    />
    <rect width={3} height={2} x={7} y={8} fill={props.color} rx={1} />
    <rect width={3} height={2} x={14} y={8} fill={props.color} rx={1} />
  </svg>
);
export default SvgHappy1;
