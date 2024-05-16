import * as React from "react";
const SvgDoneAllRound = (props) => (
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
      d="m8 13 4.228 3.382a1 1 0 0 0 1.398-.148L22 6"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="m10.805 11.917 4.582-5.6a.5.5 0 0 0-.774-.634l-4.576 5.594zm-3.166 3.87-.768-.64-.65.794a.5.5 0 0 1-.688.084L2.3 13.6a.5.5 0 1 0-.6.8l3.233 2.425a1.5 1.5 0 0 0 2.061-.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDoneAllRound;
