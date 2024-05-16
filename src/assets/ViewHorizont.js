import * as React from "react";
const SvgViewHorizont = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="M12.42 7.602a9.5 9.5 0 0 1-.135 9.047" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M14.5 5.5c-2.781 3.708-9.86 6.127-10.877 6.46a.049.049 0 0 0-.005.092c1.001.446 8.097 3.663 10.882 6.448"
    />
    <path stroke={props.color} d="M13.233 14.49a2.5 2.5 0 1 1-.093-4.986" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M16.5 12h4m-4-2.5 4-1.5m-4 6.5 4 1.5"
    />
  </svg>
);
export default SvgViewHorizont;
