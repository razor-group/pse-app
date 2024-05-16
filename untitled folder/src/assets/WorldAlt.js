import * as React from "react";
const SvgWorldAlt = (props) => (
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
      d="M18.572 7.206c-.724.848-1.685 1.543-2.805 2.028a9.49 9.49 0 0 1-3.634.765 9.564 9.564 0 0 1-3.664-.666C7.33 8.877 6.34 8.209 5.583 7.38m12.989 9.414c-.724-.848-1.685-1.543-2.805-2.028A9.49 9.49 0 0 0 12.133 14a9.565 9.565 0 0 0-3.664.666c-1.139.456-2.128 1.124-2.886 1.952M12 4v16"
    />
  </svg>
);
export default SvgWorldAlt;
