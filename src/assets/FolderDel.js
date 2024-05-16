import * as React from "react";
const SvgFolderDel = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="m17 21 5-5m0 5-5-5m2.5-2v-1.5c0-1.886 0-2.828-.586-3.414C18.328 8.5 17.386 8.5 15.5 8.5h-1.343c-.818 0-1.226 0-1.594-.152-.368-.152-.657-.442-1.235-1.02l-.656-.656c-.579-.578-.868-.868-1.235-1.02C9.069 5.5 8.66 5.5 7.843 5.5H7.5c-1.886 0-2.828 0-3.414.586C3.5 6.672 3.5 7.614 3.5 9.5v5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586H15"
    />
  </svg>
);
export default SvgFolderDel;
