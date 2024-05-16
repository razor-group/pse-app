import * as React from "react";
const SvgLinkAlt = (props) => (
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
      d="m14 10-4 4"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="m16 13 2-2a3.536 3.536 0 0 0 0-5v0a3.536 3.536 0 0 0-5 0l-2 2m-3 3-2 2a3.536 3.536 0 0 0 0 5v0a3.536 3.536 0 0 0 5 0l2-2"
    />
  </svg>
);
export default SvgLinkAlt;
