import * as React from "react";
const SvgLoadCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="M5.239 14.812a7 7 0 0 0 13.523 0" />
    <path
      fill={props.color}
      d="m12 13-.312.39.312.25.312-.25zm.5-9a.5.5 0 0 0-1 0zM6.688 9.39l5 4 .624-.78-5-4zm5.624 4 5-4-.624-.78-5 4zM12.5 13V4h-1v9z"
    />
  </svg>
);
export default SvgLoadCircle;
