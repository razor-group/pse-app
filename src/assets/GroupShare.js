import * as React from "react";
const SvgGroupShare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-4.562 7.902a3 3 0 1 0 3 5.195 3 3 0 0 0-3-5.196Zm15.124 0a2.999 2.999 0 1 1-2.998 5.194 2.999 2.999 0 0 1 2.998-5.194Z"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143 8.507 8.507 0 0 0-5.031 4.766 8.5 8.5 0 0 0-.502 4.817 3 3 0 0 1 .902-.723 7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717 2.998 2.998 0 0 1 .902.723 8.5 8.5 0 0 0-5.533-9.583 3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42 7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355 8.5 8.5 0 0 0 11.066 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGroupShare;
