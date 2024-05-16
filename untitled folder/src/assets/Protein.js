import * as React from "react";
const SvgProtein = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M9.3 5.681c1.338-1.824 4.062-1.824 5.4 0l.768 1.046a16.093 16.093 0 0 1 3.014 7.706 5.428 5.428 0 0 1-3.902 5.83l-.768.22a6.596 6.596 0 0 1-3.624 0l-.768-.22a5.428 5.428 0 0 1-3.902-5.83 16.092 16.092 0 0 1 3.015-7.706l.766-1.046Z"
    />
  </svg>
);
export default SvgProtein;
