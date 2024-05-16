import * as React from "react";
const SvgPil = (props) => (
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
      d="m11 18 7-7a3.536 3.536 0 0 0-5-5l-7 7a3.536 3.536 0 0 0 5 5"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 14.5a9.52 9.52 0 0 1-5-5v0"
    />
  </svg>
);
export default SvgPil;
