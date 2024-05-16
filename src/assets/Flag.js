import * as React from "react";
const SvgFlag = (props) => (
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
      d="M6 13V5.694c0-.317 0-.475.104-.55.104-.075.254-.025.554.075l9.919 3.307c.588.196.882.294.882.474s-.294.278-.882.474zm0 0v6"
    />
  </svg>
);
export default SvgFlag;
