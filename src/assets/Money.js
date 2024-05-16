import * as React from "react";
const SvgMoney = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={18} height={12} x={3} y={6} stroke={props.color} rx={2} />
    <path stroke={props.color} strokeLinecap="round" d="M5 9h3m8 6h3" />
    <circle cx={12} cy={12} r={2} stroke={props.color} />
  </svg>
);
export default SvgMoney;
