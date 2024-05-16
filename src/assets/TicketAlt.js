import * as React from "react";
const SvgTicketAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M17.5 19.005V4.995a.8.8 0 0 0-1.244-.666l-1.27.847a.8.8 0 0 1-.943-.041L12.5 3.9a.8.8 0 0 0-1 0L9.957 5.135a.8.8 0 0 1-.944.04l-1.27-.846a.8.8 0 0 0-1.243.666v14.01a.8.8 0 0 0 1.244.666l1.27-.846a.8.8 0 0 1 .943.04L11.5 20.1a.8.8 0 0 0 1 0l1.543-1.235a.8.8 0 0 1 .944-.04l1.27.846a.8.8 0 0 0 1.243-.666Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M9.5 9.5h5m-5 2.5h5m-5 2.5h5"
    />
  </svg>
);
export default SvgTicketAlt;
