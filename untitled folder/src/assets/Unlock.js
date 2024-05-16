import * as React from "react";
const SvgUnlock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M4 13c0-1.885 0-2.828.586-3.414C5.172 9 6.114 9 8 9h8c1.886 0 2.828 0 3.414.586C20 10.172 20 11.115 20 13v2c0 2.829 0 4.243-.879 5.122C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.878C4 19.242 4 17.829 4 15z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="m16.5 9 .078-.62a5.519 5.519 0 0 0-2.41-5.273v0a5.519 5.519 0 0 0-6.68.416l-.818.709"
    />
    <circle cx={12} cy={15} r={2} fill={props.color} />
  </svg>
);
export default SvgUnlock;
