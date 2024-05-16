import * as React from "react";
const SvgCheckRingRound = (props) => (
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
      d="M12 21a9 9 0 1 0-6.364-2.636"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="m16 10-3.598 4.318c-.655.786-.983 1.18-1.424 1.2-.44.02-.803-.343-1.527-1.067L8 13"
    />
  </svg>
);
export default SvgCheckRingRound;
