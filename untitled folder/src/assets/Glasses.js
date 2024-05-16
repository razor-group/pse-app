import * as React from "react";
const SvgGlasses = (props) => (
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
      d="M3.5 13.5v2a4 4 0 0 0 4 4v0a3 3 0 0 0 3-3V14a1.5 1.5 0 0 1 1.5-1.5v0a1.5 1.5 0 0 1 1.5 1.5v2.5a3 3 0 0 0 3 3v0a4 4 0 0 0 4-4v-2"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 13.5h-7l2.856-8.568a1.1 1.1 0 0 1 .552-.636v0A1.1 1.1 0 0 1 8.5 5.28v.22m5 8h7l-2.856-8.568a1.1 1.1 0 0 0-.552-.636v0a1.1 1.1 0 0 0-1.592.984v.22"
    />
  </svg>
);
export default SvgGlasses;
