import * as React from "react";
const SvgDirection = (props) => (
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
      d="M3.5 8.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 3.5 6.62 3.5 8.3 3.5h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.22 3.5 17.38 3.5 15.7z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6.5 7.5 4.621 4.621A3 3 0 0 1 12 14.243V16M6.5 7.5h2m-2 0v2"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m17.5 7.5-4.621 4.621A3 3 0 0 0 12 14.243V16m5.5-8.5h-2m2 0v2"
    />
  </svg>
);
export default SvgDirection;
