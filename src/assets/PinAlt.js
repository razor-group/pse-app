import * as React from "react";
const SvgPinAlt = (props) => (
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
      d="M19.361 17c.746.456 1.139.973 1.139 1.5s-.393 1.044-1.139 1.5c-.746.456-1.819.835-3.111 1.098-1.292.263-2.758.402-4.25.402s-2.958-.139-4.25-.402c-1.292-.263-2.365-.642-3.111-1.098-.746-.456-1.139-.973-1.139-1.5s.393-1.044 1.139-1.5"
    />
    <path
      stroke={props.color}
      d="M19.5 10c0 5.018-5.488 8.403-7.075 9.276a.87.87 0 0 1-.85 0C9.988 18.403 4.5 15.018 4.5 10c0-4.5 3.634-7.5 7.5-7.5 4 0 7.5 3 7.5 7.5Z"
    />
    <circle cx={12} cy={10} r={3.5} stroke={props.color} />
  </svg>
);
export default SvgPinAlt;
