import * as React from "react";
const SvgFlagAlt = (props) => (
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
      d="M6 15V5.5c0-.236 0-.354.073-.427C6.146 5 6.264 5 6.5 5h10.293c.514 0 .77 0 .834.154.064.155-.117.336-.48.7l-3.864 3.863c-.133.133-.2.2-.2.283 0 .083.066.15.2.283l3.863 3.863c.364.364.545.545.481.7-.063.154-.32.154-.834.154zm0 0v4"
    />
  </svg>
);
export default SvgFlagAlt;
