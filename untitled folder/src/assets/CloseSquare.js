import * as React from "react";
const SvgCloseSquare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="square"
      strokeLinejoin="round"
      d="M18 6 6 18M6 6l12 12"
    />
  </svg>
);
export default SvgCloseSquare;
