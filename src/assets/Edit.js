import * as React from "react";
const SvgEdit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="m6 21-.19-3.025C5.372 10.944 10.956 5 18 5l-1.458 1.166A9.438 9.438 0 0 0 13 13.536c0 2.175-2.155 3.694-4.204 2.963L6 15.5"
    />
  </svg>
);
export default SvgEdit;
