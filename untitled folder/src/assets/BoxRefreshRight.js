import * as React from "react";
const SvgBoxRefreshRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m10 12 4 4-4 4" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M20 13.5V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h7"
    />
  </svg>
);
export default SvgBoxRefreshRight;
