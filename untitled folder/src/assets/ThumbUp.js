import * as React from "react";
const SvgThumbUp = (props) => (
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
      d="M8.35 17.5H5.5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h2.85a.15.15 0 0 1 .15.15v6.7a.15.15 0 0 1-.15.15Zm.15-6 1.894-3.789a1 1 0 0 0 .106-.447V5.5a1 1 0 0 1 1-1v0a2 2 0 0 1 2 2v4"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M11.5 10.5h5.997a1 1 0 0 1 .96 1.28l-1.747 6a1 1 0 0 1-.96.72h-3.836a1 1 0 0 1-.707-.293l-.414-.414a1 1 0 0 0-.707-.293H8.5"
    />
  </svg>
);
export default SvgThumbUp;
