import * as React from "react";
const SvgMask = (props) => (
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
      d="M8.5 8.5h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m-2 2H4.825a1.675 1.675 0 0 0-1.59 2.205v0c.167.5.56.893 1.06 1.06L6.5 14.5m11-4h1.675a1.676 1.676 0 0 1 1.59 2.205v0c-.167.5-.56.893-1.06 1.06L17.5 14.5m-5.5-4v4m2-2h-4"
    />
  </svg>
);
export default SvgMask;