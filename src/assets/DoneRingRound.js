import * as React from "react";
const SvgDoneRingRound = (props) => (
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
      d="m9 10 3.258 2.444a1 1 0 0 0 1.353-.142L20 5"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M21 12a9 9 0 1 1-6.67-8.693"
    />
  </svg>
);
export default SvgDoneRingRound;
