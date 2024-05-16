import * as React from "react";
const SvgFullScreenCorner = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M4 20h-.5v.5H4zm5.354-4.646a.5.5 0 0 0-.708-.708zM3.5 14v6h1v-6zm.5 6.5h6v-1H4zm.354-.146 5-5-.708-.708-5 5zM20 4h.5v-.5H20zm-5.354 4.646a.5.5 0 0 0 .708.708zM20.5 10V4h-1v6zM20 3.5h-6v1h6zm-.354.146-5 5 .708.708 5-5z"
    />
  </svg>
);
export default SvgFullScreenCorner;