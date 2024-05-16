import * as React from "react";
const SvgSubttasksAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={4}
      height={4}
      x={16}
      y={9}
      stroke={props.color}
      rx={2}
      transform="rotate(90 16 9)"
    />
    <rect
      width={4}
      height={4}
      x={20}
      y={17}
      stroke={props.color}
      rx={2}
      transform="rotate(90 20 17)"
    />
    <path
      stroke={props.color}
      d="M5 4v11c0 1.886 0 2.828.586 3.414C6.172 19 7.114 19 9 19h7"
    />
    <path
      stroke={props.color}
      d="M5 7c0 1.886 0 2.828.586 3.414C6.172 11 7.114 11 9 11h3"
    />
  </svg>
);
export default SvgSubttasksAlt;
