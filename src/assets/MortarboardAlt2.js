import * as React from "react";
const SvgMortarboardAlt2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M19.5 8.5h-15a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.5v8"
    />
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="m7.5 8.5-.98 6.857a.15.15 0 0 0 .122.169l5.331.97a.15.15 0 0 0 .054 0l5.33-.97a.15.15 0 0 0 .123-.169L16.5 8.5"
    />
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="m6.5 13.5 5.473.995a.15.15 0 0 0 .054 0L17.5 13.5"
    />
  </svg>
);
export default SvgMortarboardAlt2;
