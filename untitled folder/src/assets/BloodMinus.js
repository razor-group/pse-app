import * as React from "react";
const SvgBloodMinus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m9 7.5.354-.354a.5.5 0 0 0-.708 0zm0 0a81.846 81.846 0 0 0-.354-.353h-.001a1.064 1.064 0 0 0-.054.056l-.149.156A23.508 23.508 0 0 0 6.34 9.966C5.203 11.605 4 13.838 4 16h1c0-1.839 1.047-3.856 2.161-5.465A22.504 22.504 0 0 1 9.308 7.9a6.876 6.876 0 0 1 .044-.044l.001-.002zm5 8.5c0-2.161-1.203-4.394-2.339-6.035A23.515 23.515 0 0 0 9.558 7.36a13.316 13.316 0 0 0-.203-.211v-.001h-.001L9 7.5l-.354.353.002.003a2.355 2.355 0 0 1 .044.044c.031.032.078.08.137.144a22.506 22.506 0 0 1 2.01 2.49C11.953 12.145 13 14.162 13 16zm-1 0a4 4 0 0 1-4 4v1a5 5 0 0 0 5-5zm-4 4a4 4 0 0 1-4-4H4a5 5 0 0 0 5 5z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 7.5h6"
    />
  </svg>
);
export default SvgBloodMinus;
