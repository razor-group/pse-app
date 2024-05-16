import * as React from "react";
const SvgDimond = (props) => (
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
      d="m4.874 12.874 5.712 5.712c.666.667 1 1 1.414 1 .414 0 .748-.333 1.414-1l5.712-5.712c.425-.425.638-.638.703-.914.065-.277-.03-.562-.22-1.133l-.697-2.092c-.44-1.32-.66-1.98-1.184-2.357C17.204 6 16.508 6 15.117 6H8.883c-1.391 0-2.087 0-2.61.378-.525.377-.745 1.037-1.185 2.357l-.697 2.092c-.19.57-.285.856-.22 1.133.065.276.278.489.703.914Z"
    />
  </svg>
);
export default SvgDimond;
