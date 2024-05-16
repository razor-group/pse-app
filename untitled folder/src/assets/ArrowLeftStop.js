import * as React from "react";
const SvgArrowLeftStop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m10 12-.354-.354-.353.354.353.354zm10 .5a.5.5 0 0 0 0-1zm-4.354-6.854-6 6 .708.708 6-6zm-6 6.708 6 6 .708-.708-6-6zM10 12.5h10v-1H10z"
    />
    <path stroke={props.color} d="M4 5v14" />
  </svg>
);
export default SvgArrowLeftStop;
