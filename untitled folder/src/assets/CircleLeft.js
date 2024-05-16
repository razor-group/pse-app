import * as React from "react";
const SvgCircleLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m14 11-4 4 4 4" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M4.206 12.75C3.19 11.87 2.8 10.845 3.097 9.84c.298-1.004 1.266-1.929 2.748-2.623 1.482-.695 3.39-1.118 5.414-1.202 2.024-.083 4.045.178 5.735.741 1.69.564 2.948 1.396 3.572 2.363.623.966.574 2.01-.139 2.96-.713.951-2.048 1.754-3.788 2.277-1.74.524-3.784.737-5.798.607"
    />
  </svg>
);
export default SvgCircleLeft;
