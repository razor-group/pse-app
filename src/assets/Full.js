import * as React from "react";
const SvgFull = (props) => (
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
      d="M9 4H7c-1.414 0-2.121 0-2.56.44C4 4.878 4 5.585 4 7v2m5 11H7c-1.414 0-2.121 0-2.56-.44C4 19.122 4 18.415 4 17v-2M15 4h2c1.414 0 2.121 0 2.56.44C20 4.878 20 5.585 20 7v2m-5 11h2c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56v-2"
    />
  </svg>
);
export default SvgFull;
