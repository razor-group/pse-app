import * as React from "react";
const SvgDateRange = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={18} height={15} x={3} y={6} stroke={props.color} rx={2} />
    <path
      fill={props.color}
      d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"
    />
    <path stroke={props.color} strokeLinecap="round" d="M7 3v3m10-3v3" />
    <rect width={4} height={2} x={7} y={12} fill={props.color} rx={0.5} />
    <rect width={4} height={2} x={7} y={16} fill={props.color} rx={0.5} />
    <rect width={4} height={2} x={13} y={12} fill={props.color} rx={0.5} />
    <rect width={4} height={2} x={13} y={16} fill={props.color} rx={0.5} />
  </svg>
);
export default SvgDateRange;
