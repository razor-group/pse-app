import * as React from "react";
const SvgSignOutCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="M8 18.928A8 8 0 1 0 8 5.072" />
    <path
      fill={props.color}
      d="m2 12-.39-.312-.25.312.25.312zm9 .5a.5.5 0 0 0 0-1zM5.61 6.688l-4 5 .78.624 4-5zm-4 5.624 4 5 .78-.624-4-5zM2 12.5h9v-1H2z"
    />
  </svg>
);
export default SvgSignOutCircle;
