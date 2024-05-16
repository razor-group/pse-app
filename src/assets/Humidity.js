import * as React from "react";
const SvgHumidity = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M12 21.5c4.101 0 7.5-3.063 7.5-6.929 0-2.415-1.233-4.859-2.627-6.862-1.403-2.017-3.022-3.66-3.895-4.491a1.413 1.413 0 0 0-1.956 0c-.873.83-2.492 2.474-3.895 4.491C5.733 9.712 4.5 12.156 4.5 14.571c0 3.866 3.399 6.929 7.5 6.929Z"
    />
    <path stroke={props.color} strokeLinecap="round" d="M12 18a4 4 0 0 1-4-4" />
  </svg>
);
export default SvgHumidity;
