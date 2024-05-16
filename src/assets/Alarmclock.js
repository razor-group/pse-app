import * as React from "react";
const SvgAlarmclock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={13} r={7} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M5 5 3 7m16-2 2 2M9 11l2.81 1.873a.25.25 0 0 0 .333-.052L14 10.5"
    />
  </svg>
);
export default SvgAlarmclock;
