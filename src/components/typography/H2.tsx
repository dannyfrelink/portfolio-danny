import React from "react";

interface H2Props {
  children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ children }) => {
  return (
    <h2 className="text-2xl border-b-[1px] border-secondary w-fit sm:text-[32px] sm:border-b-[1.5px] sm:pb-1">
      {children}
    </h2>
  );
};

export default H2;
