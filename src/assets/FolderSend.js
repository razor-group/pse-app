import * as React from "react";
const SvgFolderSend = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M5 13V9c0-1.886 0-2.828.586-3.414C6.172 5 7.114 5 9 5h.343c.818 0 1.226 0 1.594.152.368.152.657.442 1.235 1.02l.656.656c.579.578.867.868 1.235 1.02.368.152.776.152 1.594.152H17c1.886 0 2.828 0 3.414.586C21 9.172 21 10.114 21 12v3c0 1.886 0 2.828-.586 3.414C19.828 19 18.886 19 17 19h-5m-7-2h5m0 0-2.5-2.5M10 17l-2.5 2.5"
    />
  </svg>
);
export default SvgFolderSend;
