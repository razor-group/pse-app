import * as React from "react";
const SvgDeskAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M15.5 5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C19 6.393 19 7.096 19 8.5V18c0 1.886 0 2.828-.586 3.414C17.828 22 16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586C5 20.828 5 19.886 5 18V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C6.393 5 7.096 5 8.5 5"
    />
    <path
      stroke={props.color}
      d="M9 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2Z"
    />
    <path stroke={props.color} strokeLinecap="round" d="M9 12h6m-6 4h4" />
  </svg>
);
export default SvgDeskAlt;
