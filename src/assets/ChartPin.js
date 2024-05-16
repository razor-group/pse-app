import * as React from "react";
const SvgChartPin = (props) => (
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
      d="m15.5 10.5-3 3-2-2-3 3"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M14.5 4.5H7.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4.5 6.02 4.5 6.58 4.5 7.7v8.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h8.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V9.5"
    />
    <circle
      cx={18.5}
      cy={5.5}
      r={2}
      stroke={props.color}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgChartPin;
