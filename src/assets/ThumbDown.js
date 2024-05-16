import * as React from "react";
const SvgThumbDown = (props) => (
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
      d="M15.65 6.5h2.85a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2.85a.15.15 0 0 1-.15-.15v-6.7a.15.15 0 0 1 .15-.15Zm-.15 6-1.894 3.789a.999.999 0 0 0-.106.447V18.5a1 1 0 0 1-1 1v0a2 2 0 0 1-2-2v-4"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M12.5 13.5H6.503a1 1 0 0 1-.96-1.28l1.747-6a1 1 0 0 1 .96-.72h3.836a1 1 0 0 1 .707.293l.414.414a1 1 0 0 0 .707.293H15.5"
    />
  </svg>
);
export default SvgThumbDown;
