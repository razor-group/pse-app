import * as React from "react";
const SvgOnButton = (props) => (
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
      d="M6.343 6.343a8 8 0 1 0 11.314 0M12 8V4"
    />
  </svg>
);
export default SvgOnButton;
