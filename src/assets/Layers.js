import * as React from "react";
const SvgLayers = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} strokeLinejoin="round" d="M12 4 5 7l7 3 7-3z" />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M7.66 10.316 4.803 11.54a.5.5 0 0 0 0 .92l7 3a.5.5 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.92l-2.857-1.224-1.27.544L17.73 12 12 14.456 6.27 12l2.66-1.14z"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M7.66 15.316 4.803 16.54a.5.5 0 0 0 0 .92l7 3a.5.5 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.92l-2.857-1.224-1.27.544L17.73 17 12 19.456 6.27 17l2.66-1.14z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayers;
