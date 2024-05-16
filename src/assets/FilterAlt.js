import * as React from "react";
const SvgFilterAlt = (props) => (
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
      d="M12 7h8M4 7h4m9 10h3M4 17h8"
    />
    <circle
      cx={10}
      cy={7}
      r={2}
      stroke={props.color}
      strokeLinecap="round"
      transform="rotate(90 10 7)"
    />
    <circle
      cx={15}
      cy={17}
      r={2}
      stroke={props.color}
      strokeLinecap="round"
      transform="rotate(90 15 17)"
    />
  </svg>
);
export default SvgFilterAlt;
