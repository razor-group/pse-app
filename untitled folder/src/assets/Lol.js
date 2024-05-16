import * as React from "react";
const SvgLol = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={9.5}
      stroke={props.color}
      strokeLinecap="round"
    />
    <circle
      cx={9}
      cy={10}
      r={1}
      fill={props.color}
      stroke={props.color}
      strokeLinecap="round"
    />
    <circle
      cx={15}
      cy={10}
      r={1}
      fill={props.color}
      stroke={props.color}
      strokeLinecap="round"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8.629 15c-.28 0-.42 0-.494.107-.075.107-.032.225.055.461C8.706 16.978 10.217 18 12 18s3.294-1.021 3.81-2.432c.087-.236.13-.354.055-.461-.074-.107-.214-.107-.494-.107H8.63Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLol;
