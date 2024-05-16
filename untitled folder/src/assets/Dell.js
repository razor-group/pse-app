import * as React from "react";
const SvgDell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={9} stroke={props.color} />
    <path stroke={props.color} d="m9 15 6-6m0 6L9 9" />
  </svg>
);
export default SvgDell;
