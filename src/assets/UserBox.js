import * as React from "react";
const SvgUserBox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M17.933 21.257c-.216-1.2-.948-2.293-2.06-3.076-1.111-.783-2.527-1.202-3.982-1.18-1.456.022-2.852.484-3.929 1.3-1.076.817-1.76 1.932-1.924 3.137"
    />
    <circle cx={12} cy={10} r={3} stroke={props.color} strokeLinecap="round" />
    <rect
      width={19}
      height={19}
      x={2.5}
      y={2.5}
      stroke={props.color}
      rx={3.5}
    />
  </svg>
);
export default SvgUserBox;
