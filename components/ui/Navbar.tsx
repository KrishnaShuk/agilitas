"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";

import Logo from "@/assets/logo.svg";

const navLinks = [
  { href: "#about-us", label: "About us" },
  { href: "#what-we-do", label: "What we do" },
  { href: "#inside-agilitas", label: "Inside Agilitas" },
  { href: "#join-the-team", label: "Join the team" },
  { href: "#media", label: "Media" },
];

const CustomMenuIcon = () => (
  <div className="flex flex-col w-7 h-5 justify-between">
    <span className="h-[3px] w-full bg-white" />
    <span className="h-[3px] w-4/5 bg-white self-end" />
    <span className="h-[3px] w-2/3 bg-white self-end" />
  </div>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
        // CHANGE 1: Also close the mobile menu when the user scrolls down.
        setIsMenuOpen(false); 
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-4 left-4 right-4 z-50 
        lg:w-[1063px] lg:h-[70px] lg:top-3 lg:left-1/2 lg:-translate-x-1/2
        // CHANGE 2: Increased duration from 300 to 500 for a smoother effect.
        transition-transform duration-500 ease-in-out
        ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div
        className="
          flex items-center justify-between h-full
          px-4 py-3 bg-[#1C1C1C] lg:px-4 lg:py-0 lg:bg-black/50
          lg:backdrop-blur-lg border border-white/20 shadow-navbar-shadow
        "
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="Agilitas Logo"
            className="w-[120px] lg:w-[158px] lg:opacity-75"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          <div className="h-10 w-px bg-gray-300" />
          <nav className="flex gap-10 font-display">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex items-center gap-1 text-white/70 text-[18px] hover:text-white transition-colors font-medium"
              >
                <span className="absolute bottom-6 left-0.5 w-[25px] h-[5px] skew-x-[-25deg] bg-[#00f300] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
                {link.label}
                <ChevronDown className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
              </Link>
            ))}
          </nav>
        </div>

        <div className="lg:hidden pb-2.5">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} className="text-white" /> : <CustomMenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden mt-2 w-full bg-[#1C1C1C] border border-white/20 p-4">
          <div className="flex flex-col items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-white text-lg w-full text-center py-3 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};