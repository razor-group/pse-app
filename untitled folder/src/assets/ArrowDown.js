import * as React from "react";
const SvgArrowDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m12 20-.354.354.354.353.354-.353zm.5-15a.5.5 0 0 0-1 0zm-6.854 9.354 6 6 .708-.708-6-6zm6.708 6 6-6-.708-.708-6 6zM12.5 20V5h-1v15z"
    />
  </svg>
);
export default SvgArrowDown;
