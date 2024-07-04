import React from "react";

interface BaseTextProps {
  children: React.ReactNode;
}

const BaseText: React.FC<BaseTextProps> = ({ children }) => {
  return <p className="sm:text-lg">{children}</p>;
};

export default BaseText;
