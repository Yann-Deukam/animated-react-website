import React from "react";

const Button = ({ title, rightIcon, leftIcon, containerClass, id }) => {
  return (
    <button
      id="{id}"
      className={`group relative z-10 w-fit cursor-pointer overflow-hidde text-white px-7 py-3 ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
