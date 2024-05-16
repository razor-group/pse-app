import * as React from "react";
const SvgFilterBigAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle
      cx={7}
      cy={7}
      r={3}
      stroke={props.color}
      strokeLinecap="round"
      transform="rotate(90 7 7)"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M9.5 5H18a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9.5"
    />
    <circle
      cx={3}
      cy={3}
      r={3}
      stroke={props.color}
      strokeLinecap="round"
      transform="matrix(0 1 1 0 14 14)"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M14.5 15H6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h8.5"
    />
  </svg>
);
export default SvgFilterBigAlt;
