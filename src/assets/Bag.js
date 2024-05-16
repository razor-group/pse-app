import * as React from "react";
const SvgBag = (props) => (
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
      d="M7.5 8.5V8c0-.464 0-.697.02-.892a4 4 0 0 1 3.588-3.589c.195-.019.428-.019.892-.019v0c.464 0 .697 0 .892.02a4 4 0 0 1 3.589 3.588c.019.195.019.428.019.892v.5m-1 5v-2m-7 2v-2"
    />
    <path
      stroke={props.color}
      d="M5.5 12.1c0-1.697 0-2.546.527-3.073C6.554 8.5 7.403 8.5 9.1 8.5h5.8c1.697 0 2.546 0 3.073.527.527.527.527 1.376.527 3.073v2.4c0 2.828 0 4.243-.879 5.121-.878.879-2.293.879-5.121.879h-1c-2.828 0-4.243 0-5.121-.879C5.5 18.743 5.5 17.328 5.5 14.5z"
    />
  </svg>
);
export default SvgBag;
