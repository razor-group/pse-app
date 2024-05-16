import * as React from "react";
const SvgSignInCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="M4.929 19.071a10 10 0 1 0 0-14.142" />
    <path
      fill={props.color}
      d="m15 12 .39-.312.25.312-.25.312zm-12 .5a.5.5 0 0 1 0-1zm8.39-5.812 4 5-.78.624-4-5zm4 5.624-4 5-.78-.624 4-5zM15 12.5H3v-1h12z"
    />
  </svg>
);
export default SvgSignInCircle;
