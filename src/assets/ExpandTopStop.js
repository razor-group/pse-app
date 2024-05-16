import * as React from "react";
const SvgExpandTopStop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m18 17-6-6-6 6M7 6h10" />
  </svg>
);
export default SvgExpandTopStop;
