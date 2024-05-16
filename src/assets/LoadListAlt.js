import * as React from "react";
const SvgLoadListAlt = (props) => (
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
      d="M2.5 4.5h19m-16 0h13v11.337c0 .245 0 .367-.028.482a.998.998 0 0 1-.12.29c-.061.1-.148.187-.32.36l-2.063 2.062c-.173.173-.26.26-.36.322a.998.998 0 0 1-.29.12c-.115.027-.237.027-.482.027H7.9c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656c-.163-.32-.163-.74-.163-1.581zm6.5 9V8"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="m9.5 9.5 2.406-1.925a.15.15 0 0 1 .188 0L14.5 9.5"
    />
    <path
      stroke={props.color}
      d="M18.5 15.5h-2.4c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437c-.109.214-.109.494-.109 1.054v2.4"
    />
  </svg>
);
export default SvgLoadListAlt;
