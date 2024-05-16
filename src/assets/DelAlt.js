import * as React from "react";
const SvgDelAlt = (props) => (
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
      d="M18.5 7c0 1.5-3 2.5-6.5 2.5S5.5 8.5 5.5 7s3-2.5 6.5-2.5 6.5 1 6.5 2.5Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="m5.5 7 1.813 10.425a1.826 1.826 0 0 0 1.222 1.42v0c2.25.75 4.68.75 6.93 0v0a1.826 1.826 0 0 0 1.222-1.42L18.5 7"
    />
  </svg>
);
export default SvgDelAlt;
