import * as React from "react";
const SvgSuitcase = (props) => (
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
      d="M6.5 8.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1zm2 11v1a1 1 0 0 0 1 1v0a1 1 0 0 0 1-1v-1m3 0v1a1 1 0 0 0 1 1v0a1 1 0 0 0 1-1v-1m-6-12v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3"
    />
  </svg>
);
export default SvgSuitcase;
