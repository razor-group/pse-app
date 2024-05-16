import * as React from "react";
const SvgWaterfall = (props) => (
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
      d="M21 21H3m1-5v-2m8-2V9m-4 7v-6m8 3v-2m4 4V5"
    />
  </svg>
);
export default SvgWaterfall;
