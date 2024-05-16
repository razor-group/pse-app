import * as React from "react";
const SvgBoxes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#33363F"
      d="M6.5 6.3a1.8 1.8 0 0 1 1.8-1.8h6.4a1.8 1.8 0 0 1 1.8 1.8v5.2H8.3a1.8 1.8 0 0 1-1.8-1.8zm-2 7a1.8 1.8 0 0 1 1.8-1.8h6.2v8H6.3a1.8 1.8 0 0 1-1.8-1.8zm8-1.8h6.2a1.8 1.8 0 0 1 1.8 1.8v4.4a1.8 1.8 0 0 1-1.8 1.8h-6.2z"
    />
    <path
      stroke="#CCD2E3"
      strokeLinecap="round"
      d="M16.5 11.5v3m-8-3v3m3-10v3"
    />
  </svg>
);
export default SvgBoxes;
