import * as React from "react";
const SvgFull2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M4 4v-.5h-.5V4zm7.646 8.354a.5.5 0 0 0 .708-.708zM4.5 10V4h-1v6zM4 4.5h6v-1H4zm-.354-.146 8 8 .708-.708-8-8z"
    />
    <path
      fill={props.color}
      d="M4 20v.5h-.5V20zm7.646-8.354a.5.5 0 0 1 .708.708zM4.5 14v6h-1v-6zM4 19.5h6v1H4zm-.354.146 8-8 .708.708-8 8z"
    />
    <path
      fill={props.color}
      d="M20 4v-.5h.5V4zm-7.646 8.354a.5.5 0 0 1-.708-.708zM19.5 10V4h1v6zm.5-5.5h-6v-1h6zm.354-.146-8 8-.708-.708 8-8z"
    />
    <path
      fill={props.color}
      d="M20 20v.5h.5V20zm-7.646-8.354a.5.5 0 0 0-.708.708zM19.5 14v6h1v-6zm.5 5.5h-6v1h6zm.354.146-8-8-.708.708 8 8z"
    />
  </svg>
);
export default SvgFull2;
