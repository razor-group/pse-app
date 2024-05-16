import * as React from "react";
const SvgChemistry = (props) => (
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
      d="m10.5 7.5 2 3-2 3h-3l-2-3 2-3z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.5 4.5 2 3-2 3h-3l-2-3 2-3zm0 12 2 3m-12-15 2 3m5 9-1 1.5m-4-4.5-1 1.5m-1-4.5h-1m13 3h3m-5-3 2 3-2 3h-3l-2-3 2-3z"
    />
    <circle cx={10.5} cy={19.5} r={0.5} fill={props.color} />
    <circle cx={5.5} cy={16.5} r={0.5} fill={props.color} />
    <circle cx={2.5} cy={10.5} r={0.5} fill={props.color} />
  </svg>
);
export default SvgChemistry;
