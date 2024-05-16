import * as React from "react";
const SvgSpeedAlt = (props) => (
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
      strokeLinejoin="round"
      d="M6.697 17.303a7.5 7.5 0 1 1 10.606 0M12 12l4-2"
    />
  </svg>
);
export default SvgSpeedAlt;
