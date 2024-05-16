import * as React from "react";
const SvgPaper = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M18 3a3 3 0 0 1 3 3v2.143c0 .334 0 .501-.077.623a.5.5 0 0 1-.157.157C20.644 9 20.477 9 20.143 9H15m3-6a3 3 0 0 0-3 3v3m3-6H7c-1.886 0-2.828 0-3.414.586C3 4.172 3 5.114 3 7v14l3-1 3 1 3-1 3 1V9"
    />
    <path stroke={props.color} strokeLinecap="round" d="M7 7h4m-3 4H7m0 4h3" />
  </svg>
);
export default SvgPaper;
