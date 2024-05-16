import * as React from "react";
const SvgArrowLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m4 12-.354-.354-.353.354.353.354zm15 .5a.5.5 0 0 0 0-1zM9.646 5.646l-6 6 .708.708 6-6zm-6 6.708 6 6 .708-.708-6-6zM4 12.5h15v-1H4z"
    />
  </svg>
);
export default SvgArrowLeft;
