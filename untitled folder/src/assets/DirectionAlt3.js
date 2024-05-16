import * as React from "react";
const SvgDirectionAlt3 = (props) => (
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
      d="M16 18.5h2.3c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V8.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.98 5.5 19.42 5.5 18.3 5.5H5.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2.5 7.02 2.5 7.58 2.5 8.7v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218H8"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6.5 12.5 4.621 4.621A3 3 0 0 1 12 19.243V20.5m-5.5-8h2m-2 0v2"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m17.5 12.5-4.621 4.621A3 3 0 0 0 12 19.243V20.5m5.5-8h-2m2 0v2m-5.5-6V19m0-10.5L10.5 10M12 8.5l1.5 1.5"
    />
  </svg>
);
export default SvgDirectionAlt3;
