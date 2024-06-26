import * as React from "react";
const SvgWorld2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="m19.5 6-1.467 1.1a2 2 0 0 1-1.2.4h-3.358a1.578 1.578 0 0 0-.999 2.799l2 1.636a6 6 0 0 1 2.164 5.306l-.02.18a8.002 8.002 0 0 1-.523 2.087L15.5 21m-13-10.5 3.238-.54a2 2 0 0 1 2.302 2.302l-.135.807a3.337 3.337 0 0 0 1.8 3.533 2.503 2.503 0 0 1 1.308 2.846L10.5 21.5"
    />
    <circle cx={12} cy={12} r={9.5} stroke={props.color} />
  </svg>
);
export default SvgWorld2;
