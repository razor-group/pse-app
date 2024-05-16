import * as React from "react";
const SvgArrowTopLong = (props) => (
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
      strokeLinejoin="round"
      d="M12 7v14"
    />
    <path
      fill={props.color}
      d="M11.786 2.357 9.727 5.788A.8.8 0 0 0 10.413 7h3.174a.8.8 0 0 0 .686-1.212l-2.059-3.43a.25.25 0 0 0-.428 0Z"
    />
  </svg>
);
export default SvgArrowTopLong;
