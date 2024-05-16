import * as React from "react";
const SvgFileDockSearch = (props) => (
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
      d="M9 7h4m-4 8h3m-3-4h6m4 0V9c0-2.828 0-4.243-.879-5.121C17.243 3 15.828 3 13 3h-2c-2.828 0-4.243 0-5.121.879C5 4.757 5 6.172 5 9v6c0 2.828 0 4.243.879 5.121C6.757 21 8.172 21 11 21h1"
    />
    <circle
      cx={17.5}
      cy={17.5}
      r={2.5}
      stroke={props.color}
      strokeLinecap="round"
    />
    <path stroke={props.color} strokeLinecap="round" d="m21 21-1.5-1.5" />
  </svg>
);
export default SvgFileDockSearch;
