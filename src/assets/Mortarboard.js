import * as React from "react";
const SvgMortarboard = (props) => (
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
      d="m3.843 8.125 7.345-3.264a2 2 0 0 1 1.624 0l7.345 3.264a.41.41 0 0 1 0 .75l-7.345 3.264a2 2 0 0 1-1.624 0L3.843 8.875a.41.41 0 0 1 0-.75M20.5 8.5v4"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 10.5v5s.5 2 5.5 2 5.5-2 5.5-2v-5"
    />
  </svg>
);
export default SvgMortarboard;
