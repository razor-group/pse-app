import * as React from "react";
const SvgKeyAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M3.5 7.5c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C5.4 3.5 6.1 3.5 7.5 3.5h9c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C20.5 5.4 20.5 6.1 20.5 7.5v9c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C3.5 18.6 3.5 17.9 3.5 16.5z"
    />
    <circle cx={8.5} cy={11.5} r={2} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M10.5 11.5h5m2 2v-1.85a.15.15 0 0 0-.15-.15H15.5m0 0v2"
    />
  </svg>
);
export default SvgKeyAlt;
