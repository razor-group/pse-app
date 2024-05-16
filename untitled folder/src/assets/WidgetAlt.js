import * as React from "react";
const SvgWidgetAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={20} height={9} x={2} y={3} stroke={props.color} rx={2} />
    <path
      stroke={props.color}
      d="M16 18a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m11-4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2"
    />
  </svg>
);
export default SvgWidgetAlt;
