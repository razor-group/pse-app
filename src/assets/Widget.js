import * as React from "react";
const SvgWidget = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M2 12c0-1.87 0-2.804.402-3.5A3 3 0 0 1 3.5 7.402C4.196 7 5.13 7 7 7h10c1.87 0 2.804 0 3.5.402A3 3 0 0 1 21.598 8.5C22 9.196 22 10.13 22 12s0 2.804-.402 3.5a3 3 0 0 1-1.098 1.098C19.804 17 18.87 17 17 17H7c-1.87 0-2.804 0-3.5-.402A3 3 0 0 1 2.402 15.5C2 14.804 2 13.87 2 12Zm17-8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2m14 16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2"
    />
    <rect width={5} height={1} x={5.5} y={10.5} stroke={props.color} rx={0.5} />
  </svg>
);
export default SvgWidget;
