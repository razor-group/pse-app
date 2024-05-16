import * as React from "react";
const SvgPyramidChart = (props) => (
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
      d="M11.866 3.268 3.109 20.783a.15.15 0 0 0 .134.217h17.514a.15.15 0 0 0 .134-.217L12.135 3.268a.15.15 0 0 0-.268 0ZM19 17H5m12-4H7m8-4H9"
    />
  </svg>
);
export default SvgPyramidChart;
