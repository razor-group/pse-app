import * as React from "react";
const SvgArrowRightLong = (props) => (
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
      d="M17 12H3"
    />
    <path
      fill={props.color}
      d="m21.643 11.786-3.431-2.059a.8.8 0 0 0-1.212.686v3.174a.8.8 0 0 0 1.212.686l3.43-2.059a.25.25 0 0 0 0-.428Z"
    />
  </svg>
);
export default SvgArrowRightLong;
