import * as React from "react";
const SvgBubble = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={17} cy={8} r={4} stroke={props.color} />
    <circle cx={12} cy={17} r={3} stroke={props.color} />
    <circle cx={6.5} cy={9.5} r={2.5} stroke={props.color} />
  </svg>
);
export default SvgBubble;
