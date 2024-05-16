import * as React from "react";
const SvgBasket1 = (props) => (
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
      d="M12 5V3m-2 13-.5-3m4.5 3 .5-3M2 9h20v0c-1.267 0-1.9 0-2.384.3a2 2 0 0 0-.431.36c-.382.422-.495 1.045-.722 2.292l-.866 4.763c-.285 1.57-.428 2.356-.985 2.82-.556.465-1.354.465-2.95.465h-3.324c-1.596 0-2.394 0-2.95-.465-.557-.464-.7-1.25-.985-2.82l-.866-4.763c-.227-1.247-.34-1.87-.722-2.292a2 2 0 0 0-.431-.36C3.9 9 3.267 9 2 9z"
    />
  </svg>
);
export default SvgBasket1;