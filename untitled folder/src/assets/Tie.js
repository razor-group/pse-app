import * as React from "react";
const SvgTie = (props) => (
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
      d="M9.5 6.5v-4h5v4m-5 0L8 17.5l4 4 4-4-1.5-11m-5 0h5m-3 6H9"
    />
  </svg>
);
export default SvgTie;
