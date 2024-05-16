import * as React from "react";
const SvgSunlight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={4} stroke={props.color} />
    <path
      stroke={props.color}
      d="M12 8V4m0 16v-4M9.172 9.171 6.343 6.343m11.314 11.314-2.829-2.829M16 12h4M4 12h4m6.828-2.829 2.829-2.828M6.343 17.657l2.829-2.829"
    />
  </svg>
);
export default SvgSunlight;
