import * as React from "react";
const SvgMenu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M5 7h14M5 12h14M5 17h14"
    />
  </svg>
);
export default SvgMenu;
