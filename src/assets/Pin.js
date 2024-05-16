import * as React from "react";
const SvgPin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M19.5 12c0 5.018-5.488 8.403-7.075 9.276a.87.87 0 0 1-.85 0C9.988 20.403 4.5 17.018 4.5 12c0-4.5 3.634-7.5 7.5-7.5 4 0 7.5 3 7.5 7.5Z"
    />
    <circle cx={12} cy={12} r={3.5} stroke={props.color} />
  </svg>
);
export default SvgPin;
