import * as React from "react";
const SvgFlaskAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="M14.5 6.5v4.197a1 1 0 0 0 .168.555l5.796 8.693a1 1 0 0 1-.832 1.555H4.368a1 1 0 0 1-.833-1.555l5.796-8.693a1 1 0 0 0 .168-.555V6.5"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5 4.5h1a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v0a1 1 0 0 1 1-1h4"
    />
    <circle cx={13.5} cy={4.5} r={0.5} fill={props.color} />
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="m17.5 19.5-2.5-4H9l-2.5 4z"
    />
  </svg>
);
export default SvgFlaskAlt;
