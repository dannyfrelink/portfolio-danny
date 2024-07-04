import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full border-b-[0.5px] border-b-textColor flex justify-between items-center px-[7.5vw] py-[14px] sm:border-b-[0.75px] lg:py-4">
      <div className="h-[42px] w-[42px] bg-secondary rounded-2xl"></div>

      <ul className="flex gap-4 sm:gap-6 lg:gap-8">
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
