import * as React from "react";
const SvgText = (props) => (
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
      strokeLinejoin="round"
      d="M7 6v8.592c0 1.719 2.024 2.637 3.317 1.506L11 15.5M4 9h6m4 0 5 8m0-8-5 8"
    />
  </svg>
);
export default SvgText;
