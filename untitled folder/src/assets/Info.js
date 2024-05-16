import * as React from "react";
const SvgInfo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={9} stroke={props.color} />
    <path fill={props.color} d="M12.5 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
    <path stroke={props.color} d="M12 17v-7" />
  </svg>
);
export default SvgInfo;
