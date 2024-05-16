import * as React from "react";
const SvgCompassAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={9.5} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M18.5 12h1m-15 0h1M12 4.5v1m0 13v1M7.05 7.115l2.32 5.414a4 4 0 0 0 2.1 2.101l5.415 2.32a.05.05 0 0 0 .066-.065l-2.32-5.414a4 4 0 0 0-2.102-2.101L7.115 7.05a.05.05 0 0 0-.066.065Z"
    />
    <circle
      cx={12}
      cy={12}
      r={2.5}
      stroke={props.color}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgCompassAlt;
