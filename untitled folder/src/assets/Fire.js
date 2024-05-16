import * as React from "react";
const SvgFire = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="M18.5 12a6.5 6.5 0 1 1-13 0c0-5.634 5.73-9.063 6.43-9.461a.14.14 0 0 1 .14 0c.7.398 6.43 3.827 6.43 9.461Z"
    />
    <path
      fill={props.color}
      d="m15.5 11.922-.5.01zM8.5 12H9zm3.414-5.436.302.398zm.172 0 .302-.398zm-.474-.398c-.284.215-1.173.922-1.995 1.934C8.804 9.102 8 10.47 8 12h1c0-1.19.635-2.335 1.394-3.27.75-.924 1.57-1.576 1.822-1.768zm4.387 5.745c-.03-1.508-.833-2.854-1.64-3.84a12.246 12.246 0 0 0-1.971-1.905l-.604.796c.25.19 1.056.831 1.8 1.742.754.92 1.391 2.05 1.415 3.228l1-.02Zm-1 .022L15 12h1l-.001-.09zM15 12a3 3 0 0 1-3 3v1a4 4 0 0 0 4-4zm-3 3a3 3 0 0 1-3-3H8a4 4 0 0 0 4 4zm-4-3a.5.5 0 0 0 .5.5v-1a.5.5 0 0 1 .5.5zm1 0a.5.5 0 0 0-.5-.5v1A.5.5 0 0 1 8 12zm3.216-5.038a.358.358 0 0 1-.432 0l.604-.796a.642.642 0 0 0-.776 0z"
    />
    <path stroke={props.color} d="M12 21v-9" />
    <circle cx={12} cy={12} r={1} fill={props.color} />
  </svg>
);
export default SvgFire;
