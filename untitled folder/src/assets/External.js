import * as React from "react";
const SvgExternal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="M15 3.5h5.5m0 0V9m0-5.5-8 8" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M11.5 5.5h-4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-4"
    />
  </svg>
);
export default SvgExternal;
