import * as React from "react";
const SvgOil = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="m18 8-5 3-2-2H7m11-1 3 3m-3-3-4 7H3V9h4m0 0V4m0 0H4m3 0h3M3 21l1.5-1.5c.08-.08.12-.12.155-.151a2 2 0 0 1 2.69 0c.036.032.075.071.155.151l.149.148a1.911 1.911 0 0 0 2.702 0l.374-.373A1.478 1.478 0 0 1 13 19.5a1.478 1.478 0 0 0 2.275.225l.373-.373a1.911 1.911 0 0 1 2.704 0L20 21"
    />
  </svg>
);
export default SvgOil;
