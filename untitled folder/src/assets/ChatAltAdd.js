import * as React from "react";
const SvgChatAltAdd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M4 12a8 8 0 1 1 16 0v5.09c0 .848 0 1.27-.126 1.609a2 2 0 0 1-1.175 1.175C18.36 20 17.937 20 17.09 20H12a8 8 0 0 1-8-8Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-3-3v6"
    />
  </svg>
);
export default SvgChatAltAdd;
