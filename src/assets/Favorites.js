import * as React from "react";
const SvgFavorites = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M19.5 11c0 5.018-5.488 8.403-7.075 9.276a.87.87 0 0 1-.85 0C9.988 19.403 4.5 16.018 4.5 11c0-4.5 3.634-7.5 7.5-7.5 4 0 7.5 3 7.5 7.5Z"
    />
    <path
      stroke={props.color}
      d="m8.286 11.786 3.457 3.457c.121.121.182.182.257.182.075 0 .136-.06.257-.182l3.457-3.457c.748-.748.864-1.92.277-2.8-.915-1.371-2.954-1.301-3.772.13l-.141.248a.09.09 0 0 1-.156 0l-.141-.247c-.818-1.432-2.857-1.502-3.772-.13-.587.88-.47 2.051.277 2.799Z"
    />
  </svg>
);
export default SvgFavorites;