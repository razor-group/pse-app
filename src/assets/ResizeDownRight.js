import * as React from "react";
const SvgResizeDownRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="M10 20h10V10" />
    <path stroke={props.color} d="M12 17h5v-5" />
  </svg>
);
export default SvgResizeDownRight;
