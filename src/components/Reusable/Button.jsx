import React from "react";
function Button({ btnClass, icon, iconClass, text,onClick,color,props }) {
    
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={` ${btnClass}`}
        {...props}
      >
        {icon && React.cloneElement(icon, { className: iconClass, color:color})}

        {icon ? <span className="ml-2"> {text} </span> : text}
      </button>
    </>
  );
}

export default Button;
