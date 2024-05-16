import * as React from "react";
const SvgJumpTime = (props) => (
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
      d="m16.336 6.462-4.108 9.037a.25.25 0 0 1-.456 0L7.664 6.462a.5.5 0 0 1 .713-.636l3.494 2.097a.25.25 0 0 0 .258 0l3.494-2.097a.5.5 0 0 1 .713.636ZM4 18h5m6 0h5"
    />
  </svg>
);
export default SvgJumpTime;
