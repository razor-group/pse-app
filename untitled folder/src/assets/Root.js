import * as React from "react";
const SvgRoot = (props) => (
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
      d="m18.5 14.5-4-4m0 4 4-4m1-3h-5.902a.15.15 0 0 0-.138.09l-3.803 8.557a.15.15 0 0 1-.28-.014l-.843-2.53a.15.15 0 0 0-.142-.103H7.5"
    />
  </svg>
);
export default SvgRoot;
