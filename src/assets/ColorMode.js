import * as React from "react";
const SvgColorMode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={8.5} stroke={props.color} />
    <path fill={props.color} d="M16.243 7.757a6 6 0 1 0-8.486 8.486L12 12z" />
  </svg>
);
export default SvgColorMode;
