import React from "react";

const Button = ({ children, variant = "dark", ...props }) => {
  const baseClasses = "px-6 py-2 rounded-lg transition-colors";
  const variantClasses = {
    dark: "bg-[#002633] hover:bg-[#003346] text-white",
    cyan: "bg-cyan-600 hover:bg-cyan-700 text-white",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant] || ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
