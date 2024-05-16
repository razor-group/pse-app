import * as React from "react";
const SvgTrophy = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} strokeLinecap="round" d="M16.5 20.5h-9" />
    <path fill={props.color} d="M12.5 18.5a.5.5 0 0 1-1 0zm-1 0V16h1v2.5z" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M10.5 9.5h3m-8 5s-2-1.5-2-4v-2a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1m11 5s2-1.5 2-4v-2a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"
    />
    <path
      stroke="#fff"
      d="M16.5 11.36V7.5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v3.86a4 4 0 0 0 1.781 3.328l2.164 1.442a1 1 0 0 0 1.11 0l2.164-1.442a4 4 0 0 0 1.781-3.329Z"
    />
  </svg>
);
export default SvgTrophy;
