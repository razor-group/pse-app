import * as React from "react";
const SvgRefresh2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m14 15-4 4 4 4" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M18.062 8.5a7 7 0 0 1-6.937 10.445"
    />
    <path stroke={props.color} d="m10 9 4-4-4-4" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M5.938 15.5a7 7 0 0 1 7.157-10.414"
    />
  </svg>
);
export default SvgRefresh2;
