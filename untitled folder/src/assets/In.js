import * as React from "react";
const SvgIn = (props) => (
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
      d="M3 9v6c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3H9"
    />
    <path
      fill={props.color}
      d="M15 15v.5h.5V15zM7.354 6.646a.5.5 0 1 0-.708.708zM14.5 8v7h1V8zm.5 6.5H8v1h7zm.354.146-8-8-.708.708 8 8z"
    />
  </svg>
);
export default SvgIn;
