import * as React from "react";
const SvgFolderCopy = (props) => (
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
      d="M16.116 6.32a.5.5 0 0 0 .384.18h2.3c.568 0 .965 0 1.273.026.302.024.476.07.608.137a1.5 1.5 0 0 1 .655.656c.068.132.114.306.138.608.026.309.026.705.026 1.273v2.6c0 .568 0 .964-.026 1.273-.024.303-.07.476-.137.608a1.5 1.5 0 0 1-.656.655c-.132.068-.306.114-.608.138-.308.026-.705.026-1.273.026h-7.6c-.568 0-.964 0-1.273-.026-.302-.024-.476-.07-.608-.138a1.5 1.5 0 0 1-.656-.655c-.067-.132-.113-.305-.137-.608-.026-.309-.026-.705-.026-1.273V6.2c0-.568 0-.964.026-1.273.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.656c.132-.067.306-.113.608-.137.309-.026.705-.026 1.273-.026h1.301c.578 0 .775.004.952.052.17.045.33.12.474.221.149.106.278.254.648.698l1.54 1.85Z"
    />
    <path
      stroke={props.color}
      strokeMiterlimit={1.414}
      d="M6 7H5a2 2 0 0 0-2 2v1m3 10H5a2 2 0 0 1-2-2v-1m10 3h1a2 2 0 0 0 2-2v-1m-5 3H8m-5-8v3"
    />
  </svg>
);
export default SvgFolderCopy;
