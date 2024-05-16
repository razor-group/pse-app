import * as React from "react";
const SvgCloseRing = (props) => (
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
      d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM9 9l6 6m0-6-6 6"
    />
  </svg>
);
export default SvgCloseRing;
