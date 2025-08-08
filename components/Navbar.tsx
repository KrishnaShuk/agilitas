import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import Logo from '@/assets/logo.png';

const navLinks = [
  { href: '#about-us', label: 'About us' },
  { href: '#what-we-do', label: 'What we do', hasDropdown: true },
  { href: '#inside-agilitas', label: 'Inside Agilitas' },
  { href: '#join-the-team', label: 'Join the team' },
  { href: '#media', label: 'Media' },
];

export const Navbar = () => {
  return (
    <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50" style={{ width: '1063px', height: '70px' }}>
      <div className="flex items-center h-full p-4 bg-black/50 backdrop-blur-figma border border-white/20 shadow-navbar-shadow gap-12">
        
        <Link href="/">
          <Image src={Logo} alt="Agilitas Logo" className="h-10 w-auto opacity-75" />
        </Link>
        
        <div className="h-10 w-px bg-gray-300" />

        <nav className=" lg:flex w-744px h-33px gap-15 font-display">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex items-center gap-1 text-white/70 text-[18px] hover:text-white transition-colors font-medium"
            >
              <span className="absolute bottom-6 left-0.5 w-[25px] h-[5px] skew-x-[-25deg] bg-[#00f300] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 " />
              {link.label}
              <ChevronDown size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
};