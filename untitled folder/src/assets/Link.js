import * as React from "react";
const SvgLink = (props) => (
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
      d="M10 16H7a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4h3m6 4H8m6 4h3a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4h-3"
    />
  </svg>
);
export default SvgLink;
