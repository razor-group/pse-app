import * as React from "react";
const SvgChatPlus1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M12.875 5C9.225 5 7.4 5 6.242 6.103a3.986 3.986 0 0 0-.139.139C5 7.4 5 9.225 5 12.875V17c0 .943 0 1.414.293 1.707C5.586 19 6.057 19 7 19h4.125c3.65 0 5.475 0 6.633-1.103a3.95 3.95 0 0 0 .139-.139C19 16.6 19 14.775 19 11.125"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 10h6m-6 4h3m7-6V2m-3 3h6"
    />
  </svg>
);
export default SvgChatPlus1;
