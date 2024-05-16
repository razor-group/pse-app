import * as React from "react";
const SvgArrowDropLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m9.23 11.808 4.458-3.715A.8.8 0 0 1 15 8.708v6.584a.8.8 0 0 1-1.312.614L9.23 12.192a.25.25 0 0 1 0-.384"
    />
  </svg>
);
export default SvgArrowDropLeft;
