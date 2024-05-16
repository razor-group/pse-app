import * as React from "react";
const SvgMap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M19.5 15.222V6.228a.45.45 0 0 0-.651-.402l-3.192 1.596a.45.45 0 0 1-.325.03L8.668 5.548a.45.45 0 0 0-.325.03L4.75 7.376a.45.45 0 0 0-.249.402v8.994a.45.45 0 0 0 .651.402l3.192-1.596a.45.45 0 0 1 .325-.03l6.664 1.904a.45.45 0 0 0 .325-.03l3.594-1.798a.45.45 0 0 0 .249-.402Zm-4 2.278v-10m-7 8v-10"
    />
  </svg>
);
export default SvgMap;
