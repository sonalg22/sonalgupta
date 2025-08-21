"use client";

import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Experience", page: "experience" },
  { label: "Projects", page: "projects" },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-bg text-text dark:border-b dark:border-stone-600">
      <div className="flex justify-between md:items-center md:flex">
        {/* Logo / Name */}
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="home" smooth={true} duration={500}>
            <div className="container flex items-center space-x-2 cursor-pointer group">
              <h2 className="text-2xl font-bold relative transition-transform duration-300 group-hover:scale-125 hover:text-accent">
                Sonal Gupta
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 text-text rounded-md outline-none focus:border-gray-400 focus:border transition-transform duration-300 hover:scale-110"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div
          className={`flex-1 pb-3 mt-8 md:flex md:justify-end md:items-center md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                className="block lg:inline-block relative text-text cursor-pointer group px-1 py-1 transition transform duration-300 hover:text-accent hover:scale-125"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(!navbar)}
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Theme toggle */}
            {currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-accent p-2 rounded-xl transition-transform duration-300 hover:scale-125"
              >
                <RiSunLine size={25} className="text-bg" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-accent p-2 rounded-xl transition-transform duration-300 hover:scale-125"
              >
                <RiMoonFill size={25} className="text-bg" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
