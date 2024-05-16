import * as React from "react";
const SvgTree = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M12 16v3.5"
    />
    <path
      fill={props.color}
      d="m7.221 13.514-.378-.327zM10.7 9.5V9a.5.5 0 0 0-.378.173zm6.079 4.014-.378.328zM13.3 9.5l.378-.327A.5.5 0 0 0 13.3 9zm-5.701 4.341 3.479-4.014-.756-.654-3.479 4.014.756.655ZM8.128 15a.7.7 0 0 1-.529-1.159l-.756-.654C5.89 14.287 6.671 16 8.128 16zm7.744 0H8.128v1h7.744zm.529-1.159A.7.7 0 0 1 15.872 15v1c1.457 0 2.239-1.713 1.285-2.813zm-3.479-4.014 3.479 4.014.756-.654-3.48-4.014zM13.3 9h-2.6v1h2.6z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.343 7.49 2.92-3.186a1 1 0 0 1 1.474 0l2.92 3.185c.705.77.16 2.011-.885 2.011H9.228c-1.044 0-1.59-1.241-.885-2.01"
    />
  </svg>
);
export default SvgTree;
