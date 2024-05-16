import * as React from "react";
const SvgChatPlus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M12 5a7 7 0 0 1 7 7v4.454c0 .508 0 .761-.046.971a2 2 0 0 1-1.529 1.53c-.21.045-.463.045-.97.045H12a7 7 0 0 1-7-7"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 11h6M5 8V2M2 5h6m4 10h3"
    />
  </svg>
);
export default SvgChatPlus;
