import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Youtube, MapPin } from 'lucide-react';
import React from 'react';

const navLinks1 = [
  { href: '#', label: 'About Us' },
  { href: '#', label: 'What we do' },
  { href: '#', label: 'Inside Agilitas' },
];

const navLinks2 = [
  { href: '#', label: 'Join the Team' },
  { href: '#', label: 'Media' },
  { href: '#', label: 'Blogs (Coming Soon)' },
];

const socialLinks = [
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Youtube, label: 'YouTube' },
];

const legalLinks = [
  { href: '#', label: 'Terms of Use' },
  { href: '#', label: 'Privacy Policy' },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111111] text-white/80 font-sans">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          <div className="flex flex-col gap-8 lg:row-span-2">
            <Link href="/">
              <Image
                src="/images/agilitas-logo-white.png"
                alt="Agilitas Logo"
                width={150}
                height={60}
                className="lg:w-[200px]"
              />
            </Link>
            <div className="flex items-center gap-6 order-last lg:order-none">
              <span className="text-xl">Follow us</span>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-lg lg:text-xl font-bold text-white">
              Comprehensively building the entire value chain from manufacturing to retail.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:pt-2">
            <div className="flex flex-col gap-4 lg:gap-9">
              {navLinks1.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base lg:text-xl hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4 lg:gap-9">
              {navLinks2.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base lg:text-xl hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <hr className="border-white/20 lg:hidden" />
          <div className="flex flex-col gap-8">
            <h3 className="font-bold text-xl text-white">Stay in the Loop. Move with Us.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white">Email</h4>
                <a
                  href="mailto:info@agilitas.in"
                  className="underline hover:text-white break-all"
                >
                  info@agilitas.in
                </a>
              </div>
              <div>
                <h4 className="font-bold text-white">Corporate address</h4>
                <address className="not-italic text-white/60">
                  Roshini Tech Hub, PFS Club House, Marathahalli Main Rd, Lakshminarayana Pura, EPIP Zone, Chinnapanna Halli, Bengaluru, Karnataka 560037
                </address>
                <a href="#" className="flex items-center gap-2 hover:text-white mt-4">
                  <MapPin
                    size={20}
                    className="bg-white/20 rounded-full p-1 flex-shrink-0"
                  />
                  <span>Get directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-9 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-4">
          <p className="text-gray-500 text-base lg:text-xl">
            © 2025 Agilitas All rights reserved.
          </p>
          <div className="flex gap-x-3 lg:gap-x-4">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <Link
                  href={link.href}
                  className="underline hover:text-black text-base lg:text-xl"
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-400 select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
