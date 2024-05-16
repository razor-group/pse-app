import * as React from "react";
const SvgDownload = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m12 16-.354.354.354.353.354-.353zm.5-12a.5.5 0 0 0-1 0zm-6.854 6.354 6 6 .708-.708-6-6zm6.708 6 6-6-.708-.708-6 6zM12.5 16V4h-1v12z"
    />
    <path stroke={props.color} d="M5 21h14" />
  </svg>
);
export default SvgDownload;
