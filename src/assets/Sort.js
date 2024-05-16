import * as React from "react";
const SvgSort = (props) => (
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
      d="M5 7h14M5 12h10M5 17h6"
    />
  </svg>
);
export default SvgSort;
