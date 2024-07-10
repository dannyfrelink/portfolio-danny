import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="w-fit border-2 border-secondary rounded text-secondary py-1.5 px-3 sm:text-lg">
      {children}
    </div>
  );
};

export default Button;
