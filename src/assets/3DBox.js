import * as React from "react";
const Svg3DBox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="M12 21v-8m0 8-6.162-4.402c-.411-.293-.616-.44-.727-.655C5 15.728 5 15.475 5 14.971V8m7 13 6.163-4.402c.41-.293.615-.44.726-.655.111-.215.111-.468.111-.972V8m-7 5L5 8m7 5 7-5M5 8l5.838-4.17c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601L19 8"
    />
  </svg>
);
export default Svg3DBox;
