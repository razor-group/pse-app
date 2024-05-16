import * as React from "react";
const SvgFullAlt1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={18}
      height={14}
      x={3}
      y={5}
      stroke={props.color}
      strokeLinecap="round"
      rx={1.5}
    />
    <path
      fill={props.color}
      d="M6 8v-.5h-.5V8zm3.646 4.354a.5.5 0 0 0 .708-.708zM6.5 12V8h-1v4zM6 8.5h4v-1H6zm-.354-.146 4 4 .708-.708-4-4zM18 16v.5h.5V16zm-3.646-4.354a.5.5 0 0 0-.708.708zM17.5 12v4h1v-4zm.5 3.5h-4v1h4zm.354.146-4-4-.708.708 4 4z"
    />
  </svg>
);
export default SvgFullAlt1;
