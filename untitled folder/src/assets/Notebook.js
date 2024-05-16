import * as React from "react";
const SvgNotebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={13} height={17} x={6} y={4} stroke={props.color} rx={2} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M15 10V8M4 9h4m-4 4h4m-4 4h4"
    />
  </svg>
);
export default SvgNotebook;
