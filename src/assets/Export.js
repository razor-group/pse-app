import * as React from "react";
const SvgExport = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m12 5-.354-.354.354-.353.354.353zm.5 9a.5.5 0 0 1-1 0zM6.646 9.646l5-5 .708.708-5 5zm5.708-5 5 5-.708.708-5-5zM12.5 5v9h-1V5z"
    />
    <path stroke={props.color} d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" />
  </svg>
);
export default SvgExport;
