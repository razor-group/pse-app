import * as React from "react";
const SvgQuestion = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={9} stroke={props.color} />
    <circle cx={12} cy={18} r={0.5} fill={props.color} />
    <path
      stroke={props.color}
      d="M12 16v-.857c0-.714.357-1.381.951-1.777l.599-.4a3.257 3.257 0 0 0 1.45-2.71V10a3 3 0 1 0-6 0"
    />
  </svg>
);
export default SvgQuestion;
