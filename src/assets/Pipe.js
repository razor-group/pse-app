import * as React from "react";
const SvgPipe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M5.817 16.245a7.499 7.499 0 1 0 6.768-11.722l.277 1.035a6.5 6.5 0 1 1-6.01 10.41z"
      clipRule="evenodd"
    />
    <path
      stroke={props.color}
      d="M5.912 4.066A10 10 0 0 1 8.46 2.647c.42-.158.63-.238.827-.136.197.1.26.332.384.796l2.07 7.727c.122.455.183.683.08.862-.104.18-.332.24-.787.363l-7.727 2.07c-.464.124-.695.187-.882.066-.186-.12-.222-.341-.294-.784a10 10 0 0 1 3.781-9.545Z"
    />
  </svg>
);
export default SvgPipe;
