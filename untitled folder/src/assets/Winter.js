import * as React from "react";
const SvgWinter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={2.5} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M12 9V6m0-3v3m0 0L9 4m3 2 3-2m0 8h3m3 0h-3m0 0 2-3m-2 3 2 3m-8 0v3m0 3v-3m0 0-3 2m3-2 3 2m-6-8H6m-3 0h3m0 0L4 9m2 3-2 3"
    />
  </svg>
);
export default SvgWinter;
