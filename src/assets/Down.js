import * as React from "react";
const SvgDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m14 20-.354.354.354.353.354-.353zM6 3.5a.5.5 0 0 0 0 1zm2.646 11.854 5 5 .708-.708-5-5zm5.708 5 5-5-.708-.708-5 5zM14.5 20V10h-1v10zM8 3.5H6v1h2zm6.5 6.5A6.5 6.5 0 0 0 8 3.5v1a5.5 5.5 0 0 1 5.5 5.5z"
    />
  </svg>
);
export default SvgDown;
