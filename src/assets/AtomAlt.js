import * as React from "react";
const SvgAtomAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={1.5} stroke={props.color} />
    <path
      stroke={props.color}
      d="M16.5 12c0 2.7-.548 5.12-1.412 6.848C14.21 20.604 13.09 21.5 12 21.5s-2.21-.896-3.088-2.652C8.048 17.12 7.5 14.7 7.5 12s.548-5.12 1.412-6.847C9.79 3.396 10.91 2.5 12 2.5s2.21.896 3.088 2.653C15.952 6.879 16.5 9.299 16.5 12Z"
    />
    <path
      stroke={props.color}
      d="M12 16.5c-2.7 0-5.12-.548-6.847-1.412C3.396 14.21 2.5 13.09 2.5 12s.896-2.21 2.653-3.088C6.879 8.048 9.299 7.5 12 7.5c2.7 0 5.12.548 6.848 1.412C20.604 9.79 21.5 10.91 21.5 12s-.896 2.21-2.652 3.088C17.12 15.952 14.7 16.5 12 16.5Z"
    />
  </svg>
);
export default SvgAtomAlt;
