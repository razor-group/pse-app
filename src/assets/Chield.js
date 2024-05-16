import * as React from "react";
const SvgChield = (props) => (
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
      d="M18.515 5.248 12.591 2.71a1.5 1.5 0 0 0-1.182 0L5.485 5.25a1.5 1.5 0 0 0-.9 1.544l.651 5.862a6.5 6.5 0 0 0 2.3 4.275l3.504 2.92a1.5 1.5 0 0 0 1.92 0l3.505-2.92a6.5 6.5 0 0 0 2.299-4.275l.651-5.862a1.5 1.5 0 0 0-.9-1.545Z"
    />
  </svg>
);
export default SvgChield;
