"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = useCallback(() => {
    setNavbarOpen(!navbarOpen);
  }, [navbarOpen]);

  return (
    <nav className="bg-primary sticky top-0 z-20 border-b px-3">
      {/* mobile links */}
      <div
        className={`${
          navbarOpen ? "-translate-x-0" : "-translate-x-full"
        } md:hidden bg-primary text-primary absolute top-0 left-0 w-full h-screen z-50 bg-secondary transform  transition duration-200 ease-in-out`} // hidden
      >
        <div className="container mx-auto px-3">
          <div className="flex justify-between py-5">
            <Link
              href="#hero"
              className="text-3xl font-extrabold"
              onClick={handleNavbar}
            >
              Porfolio.
            </Link>
            <MenuIcon
              size={30}
              className="cursor-pointer font-bold transform hover:scale-110 transition duration-300 ease-in-out hover:bg-primary hover:text-dark rounded-full hover:p-1"
              onClick={handleNavbar}
            />
          </div>

          <ul className="flex flex-col font-bold text-lg mt-10">
            <li className="mb-8">
              <Link
                href="#about"
                className="pr-5 py-2 hover:border-b-4 hover:border-dark"
                onClick={handleNavbar}
              >
                ABOUT
              </Link>
            </li>
            <li className="mb-8">
              <Link
                href="#projects"
                className="pr-5 py-2 hover:border-b-4 hover:border-dark"
                onClick={handleNavbar}
              >
                PROJECTS
              </Link>
            </li>
            <li className="mb-8">
              <Link
                href="#footer"
                className="pr-5 py-2 hover:border-b-4 hover:border-dark"
                onClick={handleNavbar}
              >
                CONTACT ME
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* desktop links */}
      <div className="mx-auto container py-8">
        <div className="flex justify-between items-center">
          <Link href="#hero" className="text-2xl font-bold">
            Porfolio.
          </Link>

          <div className="items-center flex ">
            <ul className="hidden md:flex gap-x-5">
              <li>
                <Link
                  href="#about"
                  className="px-3 hover:border-b-2 hover:border-dark py-2 font-medium"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="px-3 hover:border-b-2 hover:border-dark py-2 font-medium"
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Button href="#footer">CONTACT ME</Button>
              </li>
            </ul>
            <div className="inline-block md:hidden">
              <MenuIcon
                size={30}
                className="ml-6 cursor-pointer font-bold transform hover:scale-110 transition duration-300 ease-in-out hover:bg-secondary hover:text-white rounded-full hover:p-1"
                onClick={handleNavbar}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
