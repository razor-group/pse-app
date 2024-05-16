import * as React from "react";
const SvgTooth = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M12 17.5c1.5 0 2.5 3 3.5 3 2 0 5-8.5 5-12.5 0-1.919-1.5-3.5-3.5-3.5s-3.5 2-5 2-3-2-5-2S3.5 6 3.5 8c0 4 3 12.5 5 12.5 1 0 2-3 3.5-3Z"
    />
  </svg>
);
export default SvgTooth;
