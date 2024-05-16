import * as React from "react";
const SvgDataBank = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M5.5 15.5h13a2 2 0 1 1 0 4h-13a2 2 0 1 1 0-4Z"
    />
    <path
      stroke={props.color}
      d="M3.5 17.5c0-1.373.942-6.985 1.533-10.371.162-.928.243-1.392.48-1.745a2.01 2.01 0 0 1 .846-.71C6.748 4.5 7.222 4.5 8.17 4.5h7.658c.949 0 1.423 0 1.812.173.341.152.637.4.845.71.238.354.319.818.48 1.746.592 3.386 1.534 8.998 1.534 10.371"
    />
    <rect width={1} height={1} x={18} y={17} fill={props.color} rx={0.5} />
    <rect width={3} height={1} x={5} y={17} fill={props.color} rx={0.5} />
  </svg>
);
export default SvgDataBank;
