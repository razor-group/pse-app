import * as React from "react";
const SvgTimeDel = (props) => (
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
      d="M9.181 5.05a7.5 7.5 0 0 1 9.768 9.772"
    />
    <path stroke={props.color} d="M17.303 17.303A7.5 7.5 0 0 1 6.697 6.697" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 19.5-15-15"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M17.906 3.62a3.5 3.5 0 0 1 2.475 2.474"
    />
  </svg>
);
export default SvgTimeDel;
