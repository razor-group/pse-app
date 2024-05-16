import * as React from "react";
const SvgImgAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={18} cy={7} r={1.5} stroke={props.color} strokeLinecap="round" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M5.037 17.5h10.927a.8.8 0 0 0 .655-1.259l-5.464-7.805a.8.8 0 0 0-1.31 0L4.38 16.241a.8.8 0 0 0 .656 1.259Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M10.5 17.5h8.557a.8.8 0 0 0 .678-1.224l-3.557-5.69a.8.8 0 0 0-1.356 0l-.963 1.539"
    />
  </svg>
);
export default SvgImgAlt;
