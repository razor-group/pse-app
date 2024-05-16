import * as React from "react";
const SvgExpandRightStop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m7 6 6 6-6 6M18 7v10" />
  </svg>
);
export default SvgExpandRightStop;
