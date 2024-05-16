import * as React from "react";
const SvgHappy = (props) => (
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
      d="M8.209 15.378c.421.365.999.646 1.652.834.658.19 1.395.288 2.139.288.744 0 1.48-.098 2.139-.288.654-.188 1.23-.469 1.652-.834"
    />
    <circle
      cx={9}
      cy={10}
      r={1}
      fill={props.color}
      stroke={props.color}
      strokeLinecap="round"
    />
    <circle
      cx={15}
      cy={10}
      r={1}
      fill={props.color}
      stroke={props.color}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgHappy;
