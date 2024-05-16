import * as React from "react";
const SvgRemove = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={9} stroke={props.color} />
    <path stroke={props.color} d="M7.5 12h9" />
  </svg>
);
export default SvgRemove;
