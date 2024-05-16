import * as React from "react";
const SvgTransferTop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M9 19v-7H5.483a.2.2 0 0 1-.142-.341L12 5l6.659 6.659a.2.2 0 0 1-.142.341H15v7"
    />
  </svg>
);
export default SvgTransferTop;
