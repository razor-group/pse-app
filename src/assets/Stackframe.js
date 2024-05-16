import * as React from "react";
const SvgStackframe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M5 8c0-.943 0-1.414.293-1.707C5.586 6 6.057 6 7 6h6.063c.46 0 .691 0 .893.094.201.095.349.272.644.626l3.333 4c.51.612.765.918.765 1.28s-.255.668-.765 1.28l-3.333 4c-.295.354-.443.531-.644.626-.202.094-.432.094-.893.094H7c-.943 0-1.414 0-1.707-.293C5 17.414 5 16.943 5 16z"
    />
  </svg>
);
export default SvgStackframe;