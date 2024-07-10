import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navItems = ["About", "Portfolio", "Contact"];

  return (
    <header className="w-full bg-background fixed top-0 border-b-[0.5px] border-b-textColor py-[14px] sm:border-b-[0.75px] xl:py-4">
      <div className="flex justify-between items-center w-[85%] mx-auto max-w-[1200px]">
        <div className="h-[42px] w-[42px] bg-secondary rounded-2xl"></div>

        <nav className="flex gap-4 sm:gap-6 xl:gap-8">
          {navItems.map((item) => (
            <Link
              className="cursor-pointer hover:text-secondary focus:text-secondary"
              to={item.toLowerCase()}
              smooth={true}
              offset={-100}
              duration={500}
              tabIndex={0}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
