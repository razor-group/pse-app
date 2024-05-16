import * as React from "react";
const SvgGlobe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={7.5} stroke={props.color} />
    <path
      stroke={props.color}
      d="M14.5 12c0 2.165-.33 4.103-.847 5.481-.259.691-.556 1.216-.86 1.559-.304.343-.573.46-.793.46-.22 0-.49-.117-.794-.46-.303-.343-.6-.868-.86-1.559C9.83 16.103 9.5 14.165 9.5 12s.33-4.103.847-5.481c.259-.691.556-1.216.86-1.559.304-.343.573-.46.793-.46.22 0 .49.117.794.46.303.343.6.868.86 1.559.516 1.378.846 3.316.846 5.481Z"
    />
    <path stroke="#fff" strokeLinecap="round" d="M4.5 12h15" />
  </svg>
);
export default SvgGlobe;
