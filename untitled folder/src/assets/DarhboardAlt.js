import * as React from "react";
const SvgDarhboardAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={6}
      height={7}
      x={4}
      y={4}
      stroke={props.color}
      strokeLinejoin="round"
      rx={1}
    />
    <rect
      width={6}
      height={5}
      x={4}
      y={15}
      stroke={props.color}
      strokeLinejoin="round"
      rx={1}
    />
    <rect
      width={6}
      height={5}
      x={14}
      y={4}
      stroke={props.color}
      strokeLinejoin="round"
      rx={1}
    />
    <rect
      width={6}
      height={7}
      x={14}
      y={13}
      stroke={props.color}
      strokeLinejoin="round"
      rx={1}
    />
  </svg>
);
export default SvgDarhboardAlt;
