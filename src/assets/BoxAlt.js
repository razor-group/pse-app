import * as React from "react";
const SvgBoxAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} strokeLinecap="round" d="M9 12a3 3 0 0 0 6 0" />
    <path
      stroke={props.color}
      d="M4.5 8.711c0-.601 0-.902.086-1.185.086-.283.252-.534.586-1.034l.14-.21c.582-.873.872-1.309 1.315-1.545.442-.237.966-.237 2.014-.237h6.718c1.048 0 1.572 0 2.014.237.442.236.733.672 1.314 1.544l.141.211c.334.5.5.75.586 1.034.086.283.086.584.086 1.185V15.5c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-7c-1.886 0-2.828 0-3.414-.586C4.5 18.328 4.5 17.386 4.5 15.5z"
    />
    <path stroke={props.color} strokeLinecap="round" d="M4.5 9.5h15" />
  </svg>
);
export default SvgBoxAlt;