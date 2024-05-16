import * as React from "react";
const SvgMicAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={12}
      height={16}
      x={6}
      y={3}
      stroke={props.color}
      strokeLinejoin="round"
      rx={6}
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22v-3m-2-6H7m11 0h-2m-6-4H7m11 0h-2"
    />
  </svg>
);
export default SvgMicAlt;
