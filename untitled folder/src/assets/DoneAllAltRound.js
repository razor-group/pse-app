import * as React from "react";
const SvgDoneAllAltRound = (props) => (
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
      d="m2 14 3.233 2.425a1 1 0 0 0 1.374-.167L15 6"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="m10.191 15.393 1.724 1.38a1.5 1.5 0 0 0 2.098-.222l8.374-10.234a.5.5 0 0 0-.774-.634l-8.374 10.235a.5.5 0 0 1-.699.074l-1.716-1.373z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDoneAllAltRound;
