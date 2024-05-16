import * as React from "react";
const SvgFlash = (props) => (
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
      d="M19.5 17.5h-15m2.5 0 1.347-7.184A1 1 0 0 1 9.33 9.5h5.34a1 1 0 0 1 .983.816L17 17.5m4.5-8h-3m-6.5-7v3m6.5-1-2 2m-11-2 2 2m-2 3h-3m10 2h1"
    />
  </svg>
);
export default SvgFlash;
