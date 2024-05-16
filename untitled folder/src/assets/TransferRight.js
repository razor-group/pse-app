import * as React from "react";
const SvgTransferRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M5 9h7V5.483a.2.2 0 0 1 .341-.142L19 12l-6.659 6.659a.2.2 0 0 1-.341-.142V15H5"
    />
  </svg>
);
export default SvgTransferRight;
