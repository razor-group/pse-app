import * as React from "react";
const SvgCompasMini = (props) => (
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
      d="m18.54 7.762-.835 5.01a6 6 0 0 1-4.932 4.933l-5.011.835a2 2 0 0 1-2.302-2.302l.835-5.01a6 6 0 0 1 4.932-4.933l5.011-.835a2 2 0 0 1 2.302 2.302Z"
    />
    <circle
      cx={12}
      cy={12}
      r={2.5}
      stroke={props.color}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgCompasMini;
