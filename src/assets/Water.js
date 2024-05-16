import * as React from "react";
const SvgWater = (props) => (
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
      d="M12 18a2 2 0 0 1-1.932-1.482"
    />
    <path
      stroke={props.color}
      d="M10.424 4.679c.631-1.073.947-1.61 1.398-1.69a1 1 0 0 1 .356 0c.451.08.767.617 1.398 1.69l1.668 2.836a27.187 27.187 0 0 1 2.707 6.315c1.027 3.593-1.67 7.17-5.408 7.17h-1.086c-3.737 0-6.435-3.577-5.408-7.17a27.187 27.187 0 0 1 2.707-6.315z"
    />
  </svg>
);
export default SvgWater;
