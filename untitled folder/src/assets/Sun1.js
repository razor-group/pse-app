import * as React from "react";
const SvgSun1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={3.5} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M12 5V3m0 18v-2m4.95-11.95 1.414-1.414M5.636 18.364 7.05 16.95M19 12h2M3 12h2m11.95 4.95 1.414 1.414M5.636 5.636 7.05 7.05"
    />
  </svg>
);
export default SvgSun1;
