import * as React from "react";
const SvgHorizontalSwitch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m4 8-.354-.354L3.293 8l.353.354zm15.5 2a.5.5 0 0 0 1 0zM7.646 3.646l-4 4 .708.708 4-4zm-4 4.708 4 4 .708-.708-4-4zM4 8.5h14v-1H4zm14 0a1.5 1.5 0 0 1 1.5 1.5h1A2.5 2.5 0 0 0 18 7.5zm2 7.5.354-.354.353.354-.353.354zM5 16v.5zm-2.5-2a.5.5 0 0 1 1 0zm13.854-2.354 4 4-.708.708-4-4zm4 4.708-4 4-.708-.708 4-4zM20 16.5H5v-1h15zm-15 0A2.5 2.5 0 0 1 2.5 14h1A1.5 1.5 0 0 0 5 15.5z"
    />
  </svg>
);
export default SvgHorizontalSwitch;
