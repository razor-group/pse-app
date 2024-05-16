import * as React from "react";
const SvgStethoscope = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={18.5} cy={10.5} r={2} stroke={props.color} />
    <circle cx={18.5} cy={10.5} r={0.5} fill={props.color} />
    <circle cx={8.5} cy={13.5} r={1.5} fill={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M8.5 13.5c3.594 0 4.766-4.842 4.967-8.002.035-.551-.415-.998-.967-.998h-1m-3 9c-3.593 0-4.766-4.842-4.967-8.002-.035-.551.415-.998.967-.998h1"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M18.5 12.5v2a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5v-1"
    />
  </svg>
);
export default SvgStethoscope;
