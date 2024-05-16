import * as React from "react";
const SvgCircleRightAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke={props.color} d="m10 11 4 4-4 4" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M9.67 6.153c-2.234.3-4.152 1.018-5.356 2.005-1.203.988-1.6 2.17-1.108 3.3.493 1.13 1.836 2.122 3.752 2.77 1.917.648 4.258.902 6.54.71m6.296-2.188c.69-.598 1.096-1.267 1.187-1.956.09-.689-.138-1.378-.666-2.016-.528-.638-1.343-1.206-2.38-1.661-1.039-.455-2.272-.785-3.606-.964"
    />
  </svg>
);
export default SvgCircleRightAlt;
