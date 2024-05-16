import * as React from "react";
const SvgLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={4}
      height={4}
      x={6}
      y={13}
      stroke={props.color}
      rx={2}
      transform="rotate(90 6 13)"
    />
    <rect
      width={4}
      height={4}
      x={17}
      y={12}
      stroke={props.color}
      rx={2}
      transform="rotate(-90 17 12)"
    />
    <path
      stroke={props.color}
      d="m18 11-1.5 1.5c-1.017 1.017-1.526 1.526-2.137 1.638-.24.045-.486.045-.726 0-.611-.112-1.12-.62-2.137-1.638-1.017-1.017-1.526-1.526-2.137-1.638a2.002 2.002 0 0 0-.726 0c-.611.112-1.12.62-2.137 1.638L5 14"
    />
  </svg>
);
export default SvgLine;
