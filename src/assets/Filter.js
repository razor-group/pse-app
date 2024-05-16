import * as React from "react";
const SvgFilter = (props) => (
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
      d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9"
    />
    <circle cx={5} cy={14} r={2} stroke={props.color} strokeLinecap="round" />
    <circle cx={12} cy={9} r={2} stroke={props.color} strokeLinecap="round" />
    <circle cx={19} cy={15} r={2} stroke={props.color} strokeLinecap="round" />
  </svg>
);
export default SvgFilter;
