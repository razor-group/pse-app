import * as React from "react";
const SvgWalletAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M14.25 4h-4.5C6.568 4 4.977 4 3.989 5.004 3 6.008 3 7.624 3 10.857v2.286c0 3.232 0 4.849.989 5.853C4.977 20 6.568 20 9.75 20h4.5c3.182 0 4.773 0 5.762-1.004.988-1.004.988-2.62.988-5.853v-2.286c0-3.232 0-4.849-.988-5.853C19.023 4 17.431 4 14.25 4Z"
    />
    <path stroke={props.color} strokeLinecap="round" d="M7 8h3" />
    <path
      stroke={props.color}
      d="M19 16h-2c-.943 0-1.414 0-1.707-.293C15 15.414 15 14.943 15 14c0-.943 0-1.414.293-1.707C15.586 12 16.057 12 17 12h2c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707C20.414 16 19.943 16 19 16Z"
    />
  </svg>
);
export default SvgWalletAlt;