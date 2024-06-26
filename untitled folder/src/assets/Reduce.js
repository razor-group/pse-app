import * as React from "react";
const SvgReduce = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M15 15v-.5h-.5v.5zm5.646 6.354a.5.5 0 0 0 .708-.708zM15 9h-.5v.5h.5zm6.354-5.646a.5.5 0 0 0-.708-.708zM9 15h.5v-.5H9zm-6.354 5.646a.5.5 0 0 0 .708.708zM9 9v.5h.5V9zM3.354 2.646a.5.5 0 1 0-.708.708zM15.5 20v-5h-1v5zm-.5-4.5h5v-1h-5zm-.354-.146 6 6 .708-.708-6-6zM14.5 4v5h1V4zm.5 5.5h5v-1h-5zm.354-.146 6-6-.708-.708-6 6zM9.5 20v-5h-1v5zM9 14.5H4v1h5zm-.354.146-6 6 .708.708 6-6zM8.5 4v5h1V4zM9 8.5H4v1h5zm.354.146-6-6-.708.708 6 6z"
    />
  </svg>
);
export default SvgReduce;
