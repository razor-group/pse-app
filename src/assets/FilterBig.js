import * as React from "react";
const SvgFilterBig = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} strokeLinecap="round" d="M10 8h10M4 16h10" />
    <circle
      cx={7}
      cy={8}
      r={3}
      stroke={props.color}
      strokeLinecap="round"
      transform="rotate(90 7 8)"
    />
    <circle
      cx={17}
      cy={16}
      r={3}
      stroke={props.color}
      strokeLinecap="round"
      transform="rotate(90 17 16)"
    />
  </svg>
);
export default SvgFilterBig;
