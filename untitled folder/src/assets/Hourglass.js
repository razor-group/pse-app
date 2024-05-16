import * as React from "react";
const SvgHourglass = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#33363F"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 12 5.638 3.903a2 2 0 0 1 .862 1.645V20a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-2.452a2 2 0 0 1 .862-1.644zm0 0 5.638-3.904a2 2 0 0 0 .862-1.644V4a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v2.452a2 2 0 0 0 .862 1.644z"
    />
    <path
      stroke="#33363F"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5 20.5v-1.13a1.5 1.5 0 0 0-.756-1.302l-2.67-1.526a.15.15 0 0 0-.148 0l-2.67 1.526A1.5 1.5 0 0 0 8.5 19.37v1.13"
    />
  </svg>
);
export default SvgHourglass;
