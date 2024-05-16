import * as React from "react";
const SvgTransferDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M9 5v7H5.483a.2.2 0 0 0-.142.341L12 19l6.659-6.659a.2.2 0 0 0-.142-.341H15V5"
    />
  </svg>
);
export default SvgTransferDown;
