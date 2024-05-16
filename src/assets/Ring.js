import * as React from "react";
const SvgRing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M7.342 12.946a4.722 4.722 0 0 1 9.315 0l.104.617c.155.935.6 1.797 1.269 2.467a.568.568 0 0 1-.402.97H6.372a.568.568 0 0 1-.402-.97 4.546 4.546 0 0 0 1.27-2.467z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="m11 9 1-6m1 6-1-6m-1.932 17.63c.114.106.365.2.715.267.349.067.777.103 1.217.103.44 0 .868-.036 1.217-.103.35-.067.6-.161.715-.268"
    />
  </svg>
);
export default SvgRing;
