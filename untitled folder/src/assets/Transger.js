import * as React from "react";
const SvgTransger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M13 17H9v2.588a.2.2 0 0 1-.324.158L2 14.5l6.676-5.246A.2.2 0 0 1 9 9.411V12h6"
    />
    <path
      stroke={props.color}
      d="M11 7h4V4.411a.2.2 0 0 1 .324-.157L22 9.5l-6.676 5.246a.2.2 0 0 1-.324-.158V12H9"
    />
  </svg>
);
export default SvgTransger;
