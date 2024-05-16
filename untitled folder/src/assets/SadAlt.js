import * as React from "react";
const SvgSadAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={9.5}
      stroke={props.color}
      strokeLinecap="round"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M8.209 16.622c.421-.365.999-.646 1.652-.834A7.807 7.807 0 0 1 12 15.5c.744 0 1.48.098 2.139.288.654.188 1.23.469 1.652.834"
    />
    <path
      fill={props.color}
      stroke={props.color}
      strokeLinecap="round"
      d="M9.5 9c.24 0 .36 0 .433.122.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.357C8.14 9 8.26 9 8.5 9zm6 0c.24 0 .36 0 .433.122.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.357C14.14 9 14.26 9 14.5 9z"
    />
  </svg>
);
export default SvgSadAlt;
