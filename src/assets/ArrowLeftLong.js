import * as React from "react";
const SvgArrowLeftLong = (props) => (
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
      d="M7 12h14"
    />
    <path
      fill={props.color}
      d="m2.357 11.786 3.431-2.059A.8.8 0 0 1 7 10.413v3.174a.8.8 0 0 1-1.212.686l-3.43-2.059a.25.25 0 0 1 0-.428Z"
    />
  </svg>
);
export default SvgArrowLeftLong;
