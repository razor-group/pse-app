import * as React from "react";
const SvgCreditcard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M3.5 9.398c0-1.025 0-1.538.203-1.928a1.8 1.8 0 0 1 .767-.767c.39-.203.903-.203 1.928-.203h11.204c1.025 0 1.538 0 1.928.203a1.8 1.8 0 0 1 .767.767c.203.39.203.903.203 1.928v6.204c0 1.025 0 1.538-.203 1.928a1.8 1.8 0 0 1-.767.767c-.39.203-.903.203-1.928.203H6.398c-1.025 0-1.538 0-1.928-.203a1.8 1.8 0 0 1-.767-.767c-.203-.39-.203-.903-.203-1.928z"
    />
    <path stroke={props.color} strokeLinecap="round" d="M3.5 10.5h17" />
    <circle cx={6.5} cy={15.5} r={0.5} fill={props.color} />
  </svg>
);
export default SvgCreditcard;
