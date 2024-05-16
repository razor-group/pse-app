import * as React from "react";
const SvgRain = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 12.5H6v1h6zm6 0h-6v1h6zm2.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5zM18 7.5a2.5 2.5 0 0 1 2.5 2.5h1A3.5 3.5 0 0 0 18 6.5zm-.98-1.75A5.501 5.501 0 0 0 12 2.5v1a4.501 4.501 0 0 1 4.108 2.66zM12 2.5a5.501 5.501 0 0 0-5.02 3.25l.912.41A4.501 4.501 0 0 1 12 3.5zm-6 4A3.5 3.5 0 0 0 2.5 10h1A2.5 2.5 0 0 1 6 7.5zM2.5 10A3.5 3.5 0 0 0 6 13.5v-1A2.5 2.5 0 0 1 3.5 10zm4.48-4.25c-.209.464-.595.75-.98.75v1c.895 0 1.577-.637 1.892-1.34zM18 6.5c-.385 0-.771-.286-.98-.75l-.912.41c.316.703.997 1.34 1.892 1.34z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M12 19v-2m5 3v-3M7 21v-4"
    />
  </svg>
);
export default SvgRain;
