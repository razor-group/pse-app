import * as React from "react";
const SvgInfo1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M13.736 21.848a10.002 10.002 0 0 0 6.698-15.221 10 10 0 1 0-6.698 15.221Z"
    />
    <path stroke={props.color} strokeLinecap="square" d="M12 12v6m0-11V6" />
  </svg>
);
export default SvgInfo1;
