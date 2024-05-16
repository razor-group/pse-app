import * as React from "react";
const SvgScanAlt2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="M21 10V9c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C18.395 5 17.93 5 17 5M3 10V9c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C5.605 5 6.07 5 7 5m14 9v1c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C18.395 19 17.93 19 17 19M3 14v1c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122C5.605 19 6.07 19 7 19"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15V9m-4 5v-4m8 4v-4"
    />
  </svg>
);
export default SvgScanAlt2;
