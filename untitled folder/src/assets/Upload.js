import * as React from "react";
const SvgUpload = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m12 5 .354-.354L12 4.293l-.354.353zm-.5 12a.5.5 0 0 0 1 0zm6.854-6.354-6-6-.708.708 6 6zm-6.708-6-6 6 .708.708 6-6zM11.5 5v12h1V5z"
    />
    <path stroke={props.color} d="M5 21h14" />
  </svg>
);
export default SvgUpload;
