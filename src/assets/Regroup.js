import * as React from "react";
const SvgRegroup = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m18 20-.354.354.354.353.354-.353zM13 4.5a.5.5 0 0 0 0 1zm.646 11.854 4 4 .708-.708-4-4zm4.708 4 4-4-.708-.708-4 4zM18.5 20V9h-1v11zM14 4.5h-1v1h1zM18.5 9A4.5 4.5 0 0 0 14 4.5v1A3.5 3.5 0 0 1 17.5 9zM6 4l.354-.354L6 3.293l-.354.353zm5 15.5a.5.5 0 0 0 0-1zm-.646-11.854-4-4-.708.708 4 4zm-4.708-4-4 4 .708.708 4-4zM5.5 4v11h1V4zM10 19.5h1v-1h-1zM5.5 15a4.5 4.5 0 0 0 4.5 4.5v-1A3.5 3.5 0 0 1 6.5 15z"
    />
  </svg>
);
export default SvgRegroup;
