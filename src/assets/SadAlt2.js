import * as React from "react";
const SvgSadAlt2 = (props) => (
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
      d="M8.43 16.761a11.8 11.8 0 0 1 1.534-.193A28.847 28.847 0 0 1 12 16.5c.712 0 1.414.023 2.036.068.618.045 1.15.11 1.534.193"
    />
    <path
      fill={props.color}
      stroke={props.color}
      strokeLinecap="round"
      d="M9.5 10c.24 0 .36 0 .433.123.073.122.03.2-.055.356a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C8.14 10 8.26 10 8.5 10zm6 0c.24 0 .36 0 .433.123.073.122.03.2-.055.356a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C14.14 10 14.26 10 14.5 10z"
    />
  </svg>
);
export default SvgSadAlt2;
