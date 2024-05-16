import * as React from "react";
const SvgFolderCreate = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="M9 13.5h2.5m0 0H14m-2.5 0V16m0-2.5V11" />
    <path
      stroke="#fff"
      d="M7 5.5H6A1.5 1.5 0 0 0 4.5 7v1M7 19.5H6A1.5 1.5 0 0 1 4.5 18v-1M17 19.5h1a1.5 1.5 0 0 0 1.5-1.5v-1m0-6v-1A1.5 1.5 0 0 0 18 8.5h-1m-2 0h-.879a1.5 1.5 0 0 1-1.06-.44L12.5 7.5m-1-1-.56-.56a1.5 1.5 0 0 0-1.061-.44H9"
    />
    <path
      fill={props.color}
      d="M19 13h1v2h-1zM4 13h1v2H4zm0-4h1v2H4zm9 10h2v1h-2zm-4 0h2v1H9z"
    />
  </svg>
);
export default SvgFolderCreate;
