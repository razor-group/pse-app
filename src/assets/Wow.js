import * as React from "react";
const SvgWow = (props) => (
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
    <circle
      cx={9}
      cy={9}
      r={1}
      fill={props.color}
      stroke={props.color}
      strokeLinecap="round"
    />
    <circle
      cx={15}
      cy={9}
      r={1}
      fill={props.color}
      stroke={props.color}
      strokeLinecap="round"
    />
    <path
      fill={props.color}
      d="M15 15.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5 1.343-2.5 3-2.5 3 1.12 3 2.5"
    />
  </svg>
);
export default SvgWow;
