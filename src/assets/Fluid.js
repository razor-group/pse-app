import * as React from "react";
const SvgFluid = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m12 3-.354-.354.354-.353.354.353zm.5 11a.5.5 0 0 1-1 0zM6.646 7.646l5-5 .708.708-5 5zm5.708-5 5 5-.708.708-5-5zM12.5 3v11h-1V3z"
    />
    <path
      fill={props.color}
      d="m12 21-.354.354.354.353.354-.353zm.5-7a.5.5 0 0 0-1 0zm-5.854 2.354 5 5 .708-.708-5-5zm5.708 5 5-5-.708-.708-5 5zM12.5 21v-7h-1v7z"
    />
  </svg>
);
export default SvgFluid;
