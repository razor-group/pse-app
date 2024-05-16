import * as React from "react";
const SvgMolecule = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={2.5} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="m10 14-3.5 3.5m4-7L6 6"
    />
    <circle cx={17} cy={17} r={1.5} stroke={props.color} />
    <circle cx={20} cy={12} r={1.5} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="M18.5 12h-4m-.5 2 2 2"
    />
    <circle cx={19} cy={5} r={2.5} stroke={props.color} />
    <path stroke={props.color} strokeLinejoin="round" d="m17 7-3 3" />
    <circle cx={5} cy={5} r={1.5} stroke={props.color} />
    <circle cx={5} cy={19} r={2.5} stroke={props.color} />
  </svg>
);
export default SvgMolecule;
