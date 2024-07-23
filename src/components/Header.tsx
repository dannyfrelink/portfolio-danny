import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/logo.svg";

const Header: React.FC = () => {
  const navItems = ["About", "Portfolio", "Contact"];
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const handleScrollToBottom = () => {
    const offset = -headerHeight * 2;
    const bodyHeight = document.body.scrollHeight;
    const viewHeight = window.innerHeight;
    const scrollPosition = bodyHeight - viewHeight - offset;

    scroll.scrollTo(scrollPosition, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <header
      ref={headerRef}
      className="w-full bg-background fixed top-0 border-b-[0.5px] border-b-textColor py-[14px] sm:border-b-[0.75px] lg:py-4"
    >
      <div className="flex justify-between items-center w-[85%] mx-auto max-w-[1200px]">
        <Image
          className="h-[42px] w-auto"
          src={Logo}
          alt="Logo Danny Frelink Development"
          width={500}
          height={500}
        />

        <nav className="flex gap-4 sm:gap-6 lg:gap-8">
          {navItems.map((item, index) => {
            if (navItems.length !== index + 1) {
              return (
                <Link
                  key={item}
                  className="cursor-pointer hover:text-secondary focus:text-secondary"
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={-headerHeight - 30}
                  duration={500}
                  tabIndex={0}
                >
                  {item}
                </Link>
              );
            } else {
              return (
                <button
                  key={item}
                  className="hover:text-secondary focus:text-secondary"
                  onClick={handleScrollToBottom}
                >
                  {item}
                </button>
              );
            }
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
