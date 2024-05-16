import * as React from "react";
const SvgArrowTop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m12 4-.354-.354.354-.353.354.353zm.5 15a.5.5 0 0 1-1 0zM5.646 9.646l6-6 .708.708-6 6zm6.708-6 6 6-.708.708-6-6zM12.5 4v15h-1V4z"
    />
  </svg>
);
export default SvgArrowTop;
