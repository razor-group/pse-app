import * as React from "react";
const SvgClock = (props) => (
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
      d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25"
    />
  </svg>
);
export default SvgClock;
