import * as React from "react";
const SvgArrowDropRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m14.77 11.808-4.458-3.715A.8.8 0 0 0 9 8.708v6.584a.8.8 0 0 0 1.312.614l4.458-3.714a.25.25 0 0 0 0-.384"
    />
  </svg>
);
export default SvgArrowDropRight;
