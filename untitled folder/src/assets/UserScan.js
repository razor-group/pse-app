import * as React from "react";
const SvgUserScan = (props) => (
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
      d="M17.5 3.5h.2c1.791 0 2.687 0 3.244.556.556.557.556 1.453.556 3.244v.2m-4 13h.2c1.791 0 2.687 0 3.244-.556.556-.557.556-1.453.556-3.244v-.2m-15-13h-.2c-1.791 0-2.687 0-3.243.556C2.5 4.614 2.5 5.51 2.5 7.3v.2m4 13h-.2c-1.791 0-2.687 0-3.243-.556C2.5 19.387 2.5 18.49 2.5 16.7v-.2m4.715-.715c.473-.683 1.16-1.26 2.002-1.665A6.448 6.448 0 0 1 12 13.5c.981 0 1.941.216 2.783.62.842.405 1.53.982 2.002 1.665"
    />
    <circle cx={12} cy={9} r={2.5} stroke={props.color} strokeLinecap="round" />
  </svg>
);
export default SvgUserScan;
