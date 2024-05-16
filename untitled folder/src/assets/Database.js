import * as React from "react";
const SvgDatabase = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <ellipse cx={12} cy={6} stroke={props.color} rx={7} ry={3} />
    <path
      stroke={props.color}
      d="M19 18c0 .394-.181.784-.533 1.148-.352.364-.867.695-1.517.973-.65.279-1.422.5-2.271.65-.85.151-1.76.229-2.679.229-.92 0-1.83-.078-2.679-.228-.85-.151-1.62-.372-2.27-.65-.65-.28-1.166-.61-1.518-.974C5.18 18.784 5 18.394 5 18M19 6v12M5 6v12"
    />
  </svg>
);
export default SvgDatabase;
