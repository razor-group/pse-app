import * as React from "react";
const SvgCalories = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M14.5 10c0-.791 1.053-1.001 1.332-.26C16.508 11.53 17 13.134 17 14a5 5 0 0 1-10 0c0-.93.568-2.711 1.322-4.663.975-2.528 1.463-3.792 2.066-3.86.192-.022.403.017.575.107.537.28.537 1.659.537 4.416a1.5 1.5 0 0 0 3 0Z"
    />
    <path
      stroke={props.color}
      d="m11 19-.263-.657a3.406 3.406 0 0 1 .503-3.393.973.973 0 0 1 1.52 0c.766.958.958 2.254.503 3.393L13 19"
    />
  </svg>
);
export default SvgCalories;
