import * as React from "react";
const SvgRename = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M9 5h5m0 0h5m-5 0v14m-5 0h5m0 0h5M11 9H4a2 2 0 0 0-2 2v4h9m6 0h3a2 2 0 0 0 2-2V9h-5"
    />
  </svg>
);
export default SvgRename;
