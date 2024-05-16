import * as React from "react";
const SvgArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m20 12 .354-.354.353.354-.353.354zm-15 .5a.5.5 0 0 1 0-1zm9.354-6.854 6 6-.708.708-6-6zm6 6.708-6 6-.708-.708 6-6zM20 12.5H5v-1h15z"
    />
  </svg>
);
export default SvgArrowRight;
