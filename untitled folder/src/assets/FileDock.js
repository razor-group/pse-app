import * as React from "react";
const SvgFileDock = (props) => (
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
      d="M19 13v2c0 2.828 0 4.243-.879 5.121C17.243 21 15.828 21 13 21h-2c-2.828 0-4.243 0-5.121-.879C5 19.243 5 17.828 5 15V9c0-2.828 0-4.243.879-5.121C6.757 3 8.172 3 11 3h1m6 0v6m3-3h-6m-6 7h6M9 9h4m-4 8h4"
    />
  </svg>
);
export default SvgFileDock;
