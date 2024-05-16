import * as React from "react";
const SvgFull1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M4 5v-.5h-.5V5zm8.146 8.854a.5.5 0 0 0 .708-.708zM4.5 11V5h-1v6zM4 5.5h6v-1H4zm-.354-.146 8.5 8.5.708-.708-8.5-8.5z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M21 13h-5c-1.886 0-2.828 0-3.414.586C12 14.172 12 15.114 12 17v2"
    />
  </svg>
);
export default SvgFull1;
