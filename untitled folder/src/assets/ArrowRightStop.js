import * as React from "react";
const SvgArrowRightStop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m14 12 .354-.354.353.354-.353.354zm-10 .5a.5.5 0 0 1 0-1zm4.354-6.854 6 6-.708.708-6-6zm6 6.708-6 6-.708-.708 6-6zM14 12.5H4v-1h10z"
    />
    <path stroke={props.color} d="M20 5v14" />
  </svg>
);
export default SvgArrowRightStop;
