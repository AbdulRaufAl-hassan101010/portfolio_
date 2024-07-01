import { Menu, MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary sticky top-0">
      <div className="mx-auto container py-4 px-3">
        <div className="flex justify-between items-end">
          <Link href="/" className="text-3xl font-extrabold">
            Porfolio.
          </Link>

          <div className="text-xs  items-center flex">
            <ul className="hidden md:flex">
              <li>
                <Link
                  href="/about"
                  className="px-3 hover:border-b-2 hover:border-dark py-2 font-semibold"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="px-3 hover:border-b-2 hover:border-dark py-2 font-semibold"
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="ml-3 px-5 py-3 bg-secondary rounded-3xl text-xs text-white font-semibold hover:bg-dark transition duration-300 ease-in-out"
                >
                  CONTACT ME
                </Link>
              </li>
            </ul>
            <div>
              <MenuIcon size={30} className="ml-6 cursor-pointer font-bold" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
