import * as React from "react";
const SvgColumUp = (props) => (
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
      d="M21 20H3m7-4v-6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6m12 0V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"
    />
  </svg>
);
export default SvgColumUp;
