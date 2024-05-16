import * as React from "react";
const SvgCollapse = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m9 13-.354-.354.354-.353.354.353zm.5 9a.5.5 0 0 1-1 0zm-5.854-4.354 5-5 .708.708-5 5zm5.708-5 5 5-.708.708-5-5zM9.5 13v9h-1v-9zm5.5-2-.354.354.354.353.354-.353zm.5-9a.5.5 0 0 0-1 0zM9.646 6.354l5 5 .708-.708-5-5zm5.708 5 5-5-.708-.708-5 5zM15.5 11V2h-1v9z"
    />
  </svg>
);
export default SvgCollapse;
