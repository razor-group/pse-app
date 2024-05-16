import * as React from "react";
const SvgTemperature = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.5 13.837H13a.5.5 0 0 0 .286.451zm-3 0 .214.451a.5.5 0 0 0 .286-.451zM13 6v7.837h1V6zm-1-1a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2zm-1 1a1 1 0 0 1 1-1V4a2 2 0 0 0-2 2zm0 7.837V6h-1v7.837zM9 17a3 3 0 0 1 1.714-2.712l-.428-.903A4 4 0 0 0 8 17zm3 3a3 3 0 0 1-3-3H8a4 4 0 0 0 4 4zm3-3a3 3 0 0 1-3 3v1a4 4 0 0 0 4-4zm-1.714-2.712A3 3 0 0 1 15 17h1a4 4 0 0 0-2.286-3.615z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 17.5v-2m3.5-3h2m-2-2h2m-2-2h2m-2-2h4"
    />
  </svg>
);
export default SvgTemperature;
