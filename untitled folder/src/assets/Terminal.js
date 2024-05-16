import * as React from "react";
const SvgTerminal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M4.5 10.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.02 7.5 6.58 7.5 7.7 7.5h8.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H7.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4.5 15.98 4.5 15.42 4.5 14.3z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.5 10.5 2 2-2 2"
    />
    <path stroke="#fff" strokeLinecap="round" d="M11.5 14.5h5" />
  </svg>
);
export default SvgTerminal;
