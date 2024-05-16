import * as React from "react";
const SvgExpandRightDouble = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m12 18 6-6-6-6M6 18l6-6-6-6" />
  </svg>
);
export default SvgExpandRightDouble;
