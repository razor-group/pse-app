import * as React from "react";
const SvgHeadphonesFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={4}
      height={7}
      x={16}
      y={12}
      stroke={props.color}
      strokeLinejoin="round"
      rx={2}
    />
    <rect
      width={4}
      height={7}
      x={4}
      y={12}
      stroke={props.color}
      strokeLinejoin="round"
      rx={2}
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 13v3m16-3v3m0-3c0-2.387-.843-4.676-2.343-6.364C16.157 4.948 14.122 4 12 4s-4.157.948-5.657 2.636C4.843 8.324 4 10.613 4 13"
    />
  </svg>
);
export default SvgHeadphonesFill;
