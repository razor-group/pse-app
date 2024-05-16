import * as React from "react";
const SvgKnife = (props) => (
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
      d="m12 12 4.605-4.605c.77-.77.77-2.02 0-2.79v0a.148.148 0 0 0-.21 0L8.5 12.5"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14 10 1.394 1.394a.15.15 0 0 0 .212 0l3.066-3.066a4 4 0 0 0 0-5.656l-.066-.066a.15.15 0 0 0-.212 0L15.5 5.5M4 17l5-5a2.121 2.121 0 0 1 3 3l-5 5a2.121 2.121 0 0 1-3-3m8-2-3-3m1.5 4.5-3-3"
    />
  </svg>
);
export default SvgKnife;
