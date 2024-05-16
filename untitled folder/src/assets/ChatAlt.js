import * as React from "react";
const SvgChatAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M20 12c0-3.771 0-5.657-1.172-6.828C17.657 4 15.771 4 12 4 8.229 4 6.343 4 5.172 5.172 4 6.343 4 8.229 4 12v6c0 .943 0 1.414.293 1.707C4.586 20 5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172C20 17.657 20 15.771 20 12Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 10h6m-6 4h3"
    />
  </svg>
);
export default SvgChatAlt;
