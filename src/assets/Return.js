import * as React from "react";
const SvgReturn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m20 10 .354.354.353-.354-.353-.354zM3.5 18a.5.5 0 0 0 1 0zm11.854-2.646 5-5-.708-.708-5 5zm5-5.708-5-5-.708.708 5 5zM20 9.5H10v1h10zM3.5 16v2h1v-2zM10 9.5A6.5 6.5 0 0 0 3.5 16h1a5.5 5.5 0 0 1 5.5-5.5z"
    />
  </svg>
);
export default SvgReturn;
