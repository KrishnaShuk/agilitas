"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react"; 
import { useState, useEffect } from "react";


import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"; 
import Logo from "@/assets/logo.svg";

const navLinks = [
  { href: "#about-us", label: "About us" },
  { href: "#what-we-do", label: "What we do" },
  { href: "#inside-agilitas", label: "Inside Agilitas" },
  { href: "#join-the-team", label: "Join the team" },
  { href: "#media", label: "Media" },
];


export const Navbar = () => {
  
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
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

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="bg-[#1C1C1C] border-l-0 text-white">
              <nav className="flex flex-col items-center gap-4 mt-12">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white text-xl w-full text-center py-4 hover:bg-white/10 "
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </header>
  );
};