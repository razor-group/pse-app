import * as React from "react";
const SvgArrowDownLong = (props) => (
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
      d="M12 17V3"
    />
    <path
      fill={props.color}
      d="m12.214 21.643 2.059-3.431A.8.8 0 0 0 13.587 17h-3.174a.8.8 0 0 0-.686 1.212l2.059 3.43a.25.25 0 0 0 .428 0Z"
    />
  </svg>
);
export default SvgArrowDownLong;
