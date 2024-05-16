import * as React from "react";
const SvgMortarboardAlt = (props) => (
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
      strokeLinejoin="round"
      d="m6.575 12.33-3.623-1.45a.41.41 0 0 1 0-.76l8.305-3.323a2 2 0 0 1 1.486 0l8.305 3.322a.41.41 0 0 1 0 .762l-3.623 1.45"
    />
    <path fill={props.color} d="M14 13.5a.5.5 0 0 0 1 0zm0-6v6h1v-6z" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 12.5v4l5.5 2 5.5-2v-4s-.5-2-5.5-2-5.5 2-5.5 2"
    />
  </svg>
);
export default SvgMortarboardAlt;
