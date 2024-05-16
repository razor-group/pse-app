import * as React from "react";
const SvgWallet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M4.5 6.5a2 2 0 0 1 2-2h11.429c.066 0 .1 0 .127.003a.5.5 0 0 1 .44.441.985.985 0 0 1 .004.127c0 .398 0 .597-.019.765a3 3 0 0 1-2.645 2.645c-.168.019-.367.019-.765.019H15m-10.5-2a2 2 0 0 0 2 2h11c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v2m-15-6v9c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-1m0 0h-2c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707 0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h2m0 4v-4"
    />
  </svg>
);
export default SvgWallet;
