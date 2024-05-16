import * as React from "react";
const SvgTransferLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M19 15h-7v3.517a.2.2 0 0 1-.341.142L5 12l6.659-6.659a.2.2 0 0 1 .341.142V9h7"
    />
  </svg>
);
export default SvgTransferLeft;
