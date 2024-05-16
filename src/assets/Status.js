import * as React from "react";
const SvgStatus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M18.98 9.253a7.524 7.524 0 0 0-4.233-4.234 3 3 0 0 0-.534.868 6.519 6.519 0 0 1 3.9 3.9 3 3 0 0 0 .868-.534Zm-6.752-3.75a6.5 6.5 0 1 0 6.268 6.268c.343-.106.67-.25.976-.424a7.5 7.5 0 1 1-6.82-6.819 4.975 4.975 0 0 0-.424.976Z"
      clipRule="evenodd"
    />
    <circle cx={17} cy={7} r={3} fill={props.color} />
  </svg>
);
export default SvgStatus;
