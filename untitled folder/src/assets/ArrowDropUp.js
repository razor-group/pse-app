import * as React from "react";
const SvgArrowDropUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m12.192 9.23 3.714 4.458A.8.8 0 0 1 15.292 15H8.708a.8.8 0 0 1-.615-1.312l3.715-4.458a.25.25 0 0 1 .384 0"
    />
  </svg>
);
export default SvgArrowDropUp;
