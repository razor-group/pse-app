import * as React from "react";
const SvgFireAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M9.5 10c0-.79-1.053-1-1.332-.26C7.492 11.53 7 13.134 7 14a5 5 0 0 0 10 0c0-.93-.568-2.711-1.322-4.663-.975-2.528-1.463-3.792-2.066-3.86a1.026 1.026 0 0 0-.575.107C12.5 5.864 12.5 7.243 12.5 10a1.5 1.5 0 0 1-3 0Z"
    />
  </svg>
);
export default SvgFireAlt;
