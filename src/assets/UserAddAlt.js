import * as React from "react";
const SvgUserAddAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={8} r={4} stroke={props.color} strokeLinecap="round" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M15.796 20.447a6 6 0 0 0-11.592 0M19 10v6m3-3h-6"
    />
  </svg>
);
export default SvgUserAddAlt;
