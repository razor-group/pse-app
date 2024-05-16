import * as React from "react";
const SvgSortArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m8 2-.354-.354L8 1.293l.354.353zm.5 15a.5.5 0 0 1-1 0zM3.646 5.646l4-4 .708.708-4 4zm4.708-4 4 4-.708.708-4-4zM8.5 2v15h-1V2zM16 22l-.354.354.354.353.354-.353zm.5-15a.5.5 0 0 0-1 0zm-4.854 11.354 4 4 .708-.708-4-4zm4.708 4 4-4-.708-.708-4 4zM16.5 22V7h-1v15z"
    />
  </svg>
);
export default SvgSortArrow;
