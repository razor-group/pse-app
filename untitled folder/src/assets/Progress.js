import * as React from "react";
const SvgProgress = (props) => (
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
      d="M12 6V3m0 18v-2m7-7h2M3 12h3m11.657-5.657.707-.707M5.636 18.364 7.05 16.95m9.9 0 1.414 1.414M5.636 5.636l2.121 2.121"
    />
  </svg>
);
export default SvgProgress;
