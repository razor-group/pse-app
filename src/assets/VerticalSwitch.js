import * as React from "react";
const SvgVerticalSwitch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m8 20-.354.354.354.353.354-.353zm2-13.5a.5.5 0 0 0 0-1zM4.646 17.354l3 3 .708-.708-3-3zm3.708 3 3-3-.708-.708-3 3zM8.5 20V8h-1v12zm0-12A1.5 1.5 0 0 1 10 6.5v-1A2.5 2.5 0 0 0 7.5 8zM16 4l-.354-.354.354-.353.354.353zm0 13h.5zm-2 2.5a.5.5 0 0 1 0-1zM12.646 6.646l3-3 .708.708-3 3zm3.708-3 3 3-.708.708-3-3zM16.5 4v13h-1V4zm0 13a2.5 2.5 0 0 1-2.5 2.5v-1a1.5 1.5 0 0 0 1.5-1.5z"
    />
  </svg>
);
export default SvgVerticalSwitch;
