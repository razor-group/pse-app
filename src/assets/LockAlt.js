import * as React from "react";
const SvgLockAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M4.5 13.5c0-1.886 0-2.828.586-3.414C5.672 9.5 6.614 9.5 8.5 9.5h7c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v1c0 2.828 0 4.243-.879 5.121-.878.879-2.293.879-5.121.879h-3c-2.828 0-4.243 0-5.121-.879C4.5 18.743 4.5 17.328 4.5 14.5z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M16.5 9.5V8A4.5 4.5 0 0 0 12 3.5v0A4.5 4.5 0 0 0 7.5 8v1.5"
    />
  </svg>
);
export default SvgLockAlt;
