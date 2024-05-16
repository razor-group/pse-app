import * as React from "react";
const SvgUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m10 4 .354-.354L10 3.293l-.354.353zm8 16.5a.5.5 0 0 0 0-1zM15.354 8.646l-5-5-.708.708 5 5zm-5.708-5-5 5 .708.708 5-5zM9.5 4v10h1V4zM16 20.5h2v-1h-2zM9.5 14a6.5 6.5 0 0 0 6.5 6.5v-1a5.5 5.5 0 0 1-5.5-5.5z"
    />
  </svg>
);
export default SvgUp;
