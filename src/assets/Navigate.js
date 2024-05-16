import * as React from "react";
const SvgNavigate = (props) => (
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
      d="m4.546 19.403 7.409-15.806a.05.05 0 0 1 .09 0l7.41 15.806a.05.05 0 0 1-.059.07l-7.383-1.97a.051.051 0 0 0-.026 0l-7.383 1.97a.05.05 0 0 1-.058-.07Z"
    />
    <path
      stroke={props.color}
      d="m8.5 10.5 3.475 1.986a.05.05 0 0 0 .05 0L15.5 10.5"
    />
  </svg>
);
export default SvgNavigate;
