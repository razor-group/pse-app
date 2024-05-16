import * as React from "react";
const SvgSortAlfa = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M6 20h12m-9-8h6m-8 5 3.117-8.726c.785-2.2 1.178-3.3 1.883-3.3.705 0 1.098 1.1 1.883 3.3L17 17"
    />
  </svg>
);
export default SvgSortAlfa;
