import * as React from "react";
const SvgWidgetAdd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={7}
      height={7}
      x={3}
      y={3}
      stroke={props.color}
      strokeLinecap="round"
      rx={1}
    />
    <rect
      width={7}
      height={7}
      x={3}
      y={14}
      stroke={props.color}
      strokeLinecap="round"
      rx={1}
    />
    <rect
      width={7}
      height={7}
      x={14}
      y={3}
      stroke={props.color}
      strokeLinecap="round"
      rx={1}
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M17.5 14v7m3.5-3.5h-7"
    />
  </svg>
);
export default SvgWidgetAdd;
