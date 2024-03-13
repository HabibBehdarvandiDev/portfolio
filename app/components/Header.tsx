"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky shadow-md shadow-slate-200 py-6 px-12 flex items-center align-middle justify-between transition-colors duration-300">
      <Link href={"/"} className="logo">
        <h1 className="font-bold text-headline_light text-lg hover:text-zinc-600 ">
          Habib.dev
        </h1>
      </Link>

      <nav className="hidden md:flex justify-end space-x-4 transition-colors duration-300">
        <Link
          href={"/"}
          className="text-headline_light font-semibold hover:text-zinc-700 cursor-pointer "
        >
          Home
        </Link>
        <Link
          href={"#about"}
          className="text-headline_light font-semibold hover:text-zinc-700 cursor-pointer "
        >
          About
        </Link>
        <Link
          href={"/"}
          className="text-headline_light font-semibold hover:text-zinc-700 cursor-pointer "
        >
          Projects
        </Link>
        <Link
          href={"#contact"}
          className="text-headline_light font-semibold hover:text-gray-600cursor-pointer "
        >
          Contact
        </Link>
      </nav>

      <nav
        className={`absolute top-0 left-0 w-screen h-screen bg-white transition-transform duration-500 flex flex-col items-center justify-center shadow-sm md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="p-2 border rounded-md shadow-sm shadow-zinc-200 bg-background_light text-headline_light absolute top-4 left-4"
          onClick={toggleMenu}
        >
          <IoClose className="w-4 h-4" />
        </button>
        <div className="p-8">
          <Link
            href="/"
            className="text-headline_light font-semibold hover:text-zinc-700 cursor-pointer block mb-4"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-headline_light font-semibold hover:text-zinc-700 cursor-pointer block mb-4"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-headline_light font-semibold hover:text-zinc-700 cursor-pointer block mb-4"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-headline_light font-semibold hover:text-gray-600 cursor-pointer block"
          >
            Contact
          </Link>
        </div>
      </nav>

      <button
        className="p-2 border rounded-md shadow-sm shadow-zinc-200 bg-background_light text-headline_light md:hidden"
        onClick={toggleMenu}
      >
        <FaBarsStaggered className="w-4 h-4" />
      </button>
    </header>
  );
};

export default Header;
