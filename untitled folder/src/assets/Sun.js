import * as React from "react";
const SvgSun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke="#33363F" d="M7.5 18a4.5 4.5 0 1 1 9 0" />
    <path stroke="#33363F" strokeLinecap="round" d="m17.5 12.5 2-2" />
    <path stroke="#33363F" strokeLinecap="square" d="M5 18h14" />
    <path stroke="#33363F" strokeLinecap="round" d="m4.5 10.5 2 2" />
    <path
      fill="#33363F"
      d="m12 2 .354-.354L12 1.293l-.354.353zm-.5 8.5a.5.5 0 0 0 1 0zm3.854-5.854-3-3-.708.708 3 3zm-3.708-3-3 3 .708.708 3-3zM11.5 2v8.5h1V2z"
    />
  </svg>
);
export default SvgSun;
