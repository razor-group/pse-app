import * as React from "react";
const SvgTemperature1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m15.384 12.319-.339.368zM9.5 6A2.5 2.5 0 0 1 12 3.5v-1A3.5 3.5 0 0 0 8.5 6zm0 5.5V6h-1v5.5zm-2 4.5c0-1.31.56-2.49 1.455-3.313l-.677-.736A5.487 5.487 0 0 0 6.5 16zm4.5 4.5A4.5 4.5 0 0 1 7.5 16h-1a5.5 5.5 0 0 0 5.5 5.5zm4.5-4.5a4.5 4.5 0 0 1-4.5 4.5v1a5.5 5.5 0 0 0 5.5-5.5zm-1.455-3.313A4.487 4.487 0 0 1 16.5 16h1a5.487 5.487 0 0 0-1.778-4.049zM14.5 6v5.5h1V6zM12 3.5A2.5 2.5 0 0 1 14.5 6h1A3.5 3.5 0 0 0 12 2.5zm3.722 8.451a.629.629 0 0 1-.222-.45h-1c0 .479.231.897.545 1.186zm-7.222-.45a.632.632 0 0 1-.222.45l.677.736c.314-.289.545-.707.545-1.187z"
    />
    <circle cx={12} cy={16} r={2.5} stroke={props.color} />
  </svg>
);
export default SvgTemperature1;
