import * as React from "react";
const SvgSound = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M13 14H8.818a3.249 3.249 0 1 0 .403 6.472l.557-.07A3.678 3.678 0 0 0 13 16.754V7.39c0-1.619 0-2.428.474-2.987.474-.56 1.272-.693 2.868-.96L18.7 3.05c.136-.022.204-.034.24.006.037.04.02.106-.013.24l-.895 3.581c-.015.06-.023.09-.044.11-.02.02-.05.026-.111.038L13 8"
    />
  </svg>
);
export default SvgSound;
