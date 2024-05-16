import * as React from "react";
const SvgCompass = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M8.918 10.907a12.534 12.534 0 0 1-.395-2.384 12.53 12.53 0 0 1 2.384.395c1.013.278 2.031.727 2.74 1.435.708.709 1.157 1.727 1.435 2.74.258.943.357 1.838.395 2.384a12.535 12.535 0 0 1-2.384-.396c-1.014-.277-2.031-.726-2.74-1.435-.708-.708-1.157-1.726-1.435-2.74Z"
    />
    <circle cx={12} cy={12} r={8.5} stroke={props.color} />
  </svg>
);
export default SvgCompass;
