import * as React from "react";
const SvgInfoAlt = (props) => (
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
      d="M11 10.5h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h.5m-1-7h.01"
    />
    <path
      stroke={props.color}
      d="M13.39 19.878A8 8 0 1 0 10.61 4.12a8 8 0 0 0 2.78 15.758Z"
    />
  </svg>
);
export default SvgInfoAlt;
