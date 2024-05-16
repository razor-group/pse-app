import * as React from "react";
const SvgTumer = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={14} r={8} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M12 14v-3m5.5-3.5L19 6m-8.932-3.63c.114-.106.365-.2.715-.267A6.68 6.68 0 0 1 12 2c.44 0 .868.036 1.217.103.35.067.6.161.715.268"
    />
  </svg>
);
export default SvgTumer;
