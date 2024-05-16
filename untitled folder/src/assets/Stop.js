import * as React from "react";
const SvgStop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={4}
      height={14}
      x={6}
      y={5}
      stroke={props.color}
      strokeLinecap="round"
      rx={1}
    />
    <rect
      width={4}
      height={14}
      x={14}
      y={5}
      stroke={props.color}
      strokeLinecap="round"
      rx={1}
    />
  </svg>
);
export default SvgStop;
