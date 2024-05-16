import * as React from "react";
const SvgTable = (props) => (
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
      d="M15 9h6v9c0 .943 0 1.414-.293 1.707C20.414 20 19.943 20 19 20h-4zM3 9h6v11H5c-.943 0-1.414 0-1.707-.293C3 19.414 3 18.943 3 18zm6 0h6v11H9zM3 6c0-.943 0-1.414.293-1.707C3.586 4 4.057 4 5 4h14c.943 0 1.414 0 1.707.293C21 4.586 21 5.057 21 6v3H3z"
    />
  </svg>
);
export default SvgTable;