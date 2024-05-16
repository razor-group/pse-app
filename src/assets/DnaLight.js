import * as React from "react";
const SvgDnaLight = (props) => (
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
      d="m19.5 3.5-.282 2.54A7.262 7.262 0 0 1 12 12.5v0c-3.7 0-6.81 2.782-7.218 6.46L4.5 21.5"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 3.5.282 2.54A7.253 7.253 0 0 0 7.8 11.163M19.5 21.5l-.282-2.54A7.262 7.262 0 0 0 12 12.5m7-6H5m14 12H5"
    />
    <path stroke={props.color} strokeLinejoin="round" d="M18 15.5H6" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.5 9.5h-11"
    />
  </svg>
);
export default SvgDnaLight;
