import * as React from "react";
const SvgUserCicrle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={10} r={3} stroke={props.color} strokeLinecap="round" />
    <circle cx={12} cy={12} r={9} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M18 18.706c-.354-1.063-1.134-2.003-2.219-2.673C14.697 15.363 13.367 15 12 15s-2.697.363-3.781 1.033c-1.085.67-1.865 1.61-2.219 2.673"
    />
  </svg>
);
export default SvgUserCicrle;
