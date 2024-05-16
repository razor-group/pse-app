import * as React from "react";
const SvgPhone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M10 2.5h-.5v.527c0 .212 0 .418.023.588a.99.99 0 0 0 .27.592.99.99 0 0 0 .592.27c.17.023.376.023.588.023h2.054c.212 0 .418 0 .588-.023a.99.99 0 0 0 .592-.27.99.99 0 0 0 .27-.592c.023-.17.023-.376.023-.588V2.5z"
    />
    <rect
      width={11}
      height={19}
      x={6.5}
      y={2.5}
      stroke={props.color}
      rx={1.5}
    />
    <circle cx={12} cy={18} r={1} fill={props.color} />
  </svg>
);
export default SvgPhone;
