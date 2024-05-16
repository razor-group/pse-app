import * as React from "react";
const SvgAddRound = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} strokeLinecap="round" d="M12 6v12m6-6H6" />
  </svg>
);
export default SvgAddRound;
