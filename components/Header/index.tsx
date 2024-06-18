"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // const toggleMenu = () => {
  //   const menu: HTMLElement | null = document.querySelector(".menu-links");
  //   const icon: HTMLElement | null = document.querySelector(".hamburger-icon");
  //   if (menu && icon) {
  //     menu.classList.toggle("open");
  //     icon.classList.toggle("open");
  //   }
  // }

  return (
    <>
      <nav className="w-full flex justify-between items-center p-4">
        <div className="logo text-2xl text-black font-bold w-full ml-28">
          Priya Singh
        </div>
        <div className="hamburger-menu md:hidden">
          <div
            className={`hamburger-icon cursor-pointer ${
              menuOpen ? "open" : ""
            }`}
            onClick={toggleMenu}
          >
            <span className="block bg-gray-600 w-6 h-1 mb-1"></span>
            <span className="block bg-gray-600 w-6 h-1 mb-1"></span>
            <span className="block bg-gray-600 w-6 h-1"></span>
          </div>
        </div>
        <div
          className={`menu-links md:flex ${
            menuOpen ? "block" : "hidden"
          } md:mt-0 absolute md:relative w-full md:bg-white bg-gray-600 mt-2 pb-2`}
        >
          <ul className="flex md:flex-row items-baseline pl-20 flex-col space-x-8 md:mt-0 mt-20">
            <li>
              <Link
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 md:text-black text-white hover:text-gray-300 text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="block mt-4 lg:inline-block lg:mt-0 md:text-black text-white hover:text-gray-300 text-lg"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block mt-4 lg:inline-block lg:mt-0 md:text-black text-white hover:text-gray-300 text-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
