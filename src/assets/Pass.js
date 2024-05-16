import * as React from "react";
const SvgPass = (props) => (
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
      strokeLinejoin="round"
      d="M5.5 5.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"
    />
    <circle
      cx={12}
      cy={10}
      r={3.5}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 10c0 1.044-.213 1.964-.533 2.605-.335.67-.706.895-.967.895-.26 0-.632-.225-.967-.895-.32-.641-.533-1.561-.533-2.605s.213-1.964.533-2.605c.335-.67.706-.895.967-.895.26 0 .632.224.967.895.32.641.533 1.561.533 2.605"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5 10h-7m7 5.5h-7m6 2h-5"
    />
  </svg>
);
export default SvgPass;
