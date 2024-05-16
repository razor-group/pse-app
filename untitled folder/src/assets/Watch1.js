import * as React from "react";
const SvgWatch1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={5.5} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.5 7.5.407-3.255A.85.85 0 0 1 9.75 3.5h4.5c.428 0 .79.32.843.745L15.5 7.5m-7 9 .407 3.255a.85.85 0 0 0 .843.745h4.5a.85.85 0 0 0 .843-.745L15.5 16.5"
    />
    <path
      fill={props.color}
      d="M18.15 11h-.65v2h.65c.47 0 .85-.38.85-.85v-.3a.85.85 0 0 0-.85-.85"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="m12 12-2-2.5m2 2.5 2.5.5"
    />
  </svg>
);
export default SvgWatch1;
