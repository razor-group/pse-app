import * as React from "react";
const SvgBatteryFull = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={9} height={14} x={7.5} y={6.5} stroke="#33363F" rx={1.5} />
    <rect width={6} height={11} x={9} y={8} fill="#33363F" rx={0.8} />
    <path
      fill="#33363F"
      fillRule="evenodd"
      d="M9.293 3.293C9 3.586 9 4.057 9 5h6c0-.943 0-1.414-.293-1.707C14.414 3 13.943 3 13 3h-2c-.943 0-1.414 0-1.707.293"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryFull;
