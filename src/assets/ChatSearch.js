import * as React from "react";
const SvgChatSearch = (props) => (
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
      d="M14.5 18.5h-8a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 10.5h7m-7 3h5"
    />
    <circle cx={16.5} cy={15.5} r={2} stroke={props.color} />
    <path stroke={props.color} strokeLinecap="round" d="m19 18 1.5 1.5" />
  </svg>
);
export default SvgChatSearch;
