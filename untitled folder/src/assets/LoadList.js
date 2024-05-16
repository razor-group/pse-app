import * as React from "react";
const SvgLoadList = (props) => (
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
      d="M2.5 4.5h19m-17 0h15v12.6c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.655c-.32.164-.74.164-1.581.164H6.9c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656c-.163-.32-.163-.74-.163-1.581zm7.5 11V10"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="m9.5 11.5 2.406-1.925a.15.15 0 0 1 .188 0L14.5 11.5"
    />
  </svg>
);
export default SvgLoadList;
