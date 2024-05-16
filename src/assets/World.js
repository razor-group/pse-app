import * as React from "react";
const SvgWorld = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={8} stroke={props.color} />
    <path
      stroke={props.color}
      d="M18.207 6.785c-.732.676-1.653 1.224-2.696 1.606-1.044.383-2.187.59-3.348.608a10.349 10.349 0 0 1-3.378-.505c-1.064-.35-2.013-.87-2.782-1.523m12.319 10.352c-.74-.715-1.685-1.296-2.767-1.698A10.231 10.231 0 0 0 12.078 15a10.291 10.291 0 0 0-3.492.574c-1.092.386-2.053.953-2.811 1.657M12 4v16m8-8H4"
    />
  </svg>
);
export default SvgWorld;
