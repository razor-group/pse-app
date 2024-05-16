import * as React from "react";
const SvgMaterials = (props) => (
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
      d="m3 7 7-4 11 4M3 7v5l11 4 7-4V7M3 7l11 4 7-4"
    />
    <path stroke={props.color} strokeLinejoin="round" d="M3 12v5l11 4 7-4v-5" />
  </svg>
);
export default SvgMaterials;
