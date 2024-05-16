import * as React from "react";
const SvgCode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m16 7 4 5-4 5M8 7l-4 5 4 5" />
  </svg>
);
export default SvgCode;
