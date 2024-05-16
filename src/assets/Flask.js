import * as React from "react";
const SvgFlask = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="M15.5 10.5v8.002a3 3 0 0 1-6-.002v-8"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5 8.5h1a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v0a1 1 0 0 1 1-1h3"
    />
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="M13.5 18.5v-3h-2v3a1 1 0 1 0 2 0Z"
    />
    <circle
      cx={16}
      cy={4}
      r={1.5}
      stroke={props.color}
      strokeLinejoin="round"
    />
    <circle cx={13.5} cy={8.5} r={0.5} fill={props.color} />
    <circle
      cx={9.5}
      cy={5.5}
      r={1}
      stroke={props.color}
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFlask;
