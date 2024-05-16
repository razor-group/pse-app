import * as React from "react";
const SvgRoadAlt = (props) => (
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
      d="m8.574 20.352 3.381-6.763a.05.05 0 0 1 .09 0l3.381 6.763c.022.044-.026.09-.07.066l-3.331-1.904a.05.05 0 0 0-.05 0l-3.332 1.904c-.043.025-.091-.021-.07-.066ZM20.5 18.5l-4-15m-13 15 4-15m4.5 7v-2m0-3v-2"
    />
  </svg>
);
export default SvgRoadAlt;
