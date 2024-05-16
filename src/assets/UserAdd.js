import * as React from "react";
const SvgUserAdd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={8} r={4} stroke={props.color} strokeLinecap="round" />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M15.276 16a10.958 10.958 0 0 0-4.37-.446c-1.64.162-3.191.686-4.456 1.517-1.264.832-2.196 1.943-2.648 3.208a.5.5 0 1 0 .941.336C5.11 19.588 5.885 18.64 7 17.907c1.115-.734 2.508-1.21 4.005-1.358.55-.054 1.103-.063 1.649-.028A1.993 1.993 0 0 1 14 16z"
      clipRule="evenodd"
    />
    <path stroke={props.color} strokeLinecap="round" d="M18 14v8m4-4h-8" />
  </svg>
);
export default SvgUserAdd;
