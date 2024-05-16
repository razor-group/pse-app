import * as React from "react";
const SvgRemote = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m7 4 4 5-4 5m10-4-4 5 4 5" />
  </svg>
);
export default SvgRemote;
