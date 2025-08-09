// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Youtube, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';



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
  { href: '#', icon: Linkedin },
  { href: '#', icon: Instagram },
  { href: '#', icon: Youtube },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111111] text-white/80 font-sans">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-20">
            
            <div className="flex flex-col gap-8">
              <Link href="/">
               <Image src="/images/agilitas-logo-white.png" alt="Agilitas Logo" width={200}  height={80} />
              </Link>
              <div className="flex items-center gap-6">
                <span className="text-xl">Follow us</span>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} className="hover:text-white">
                      <social.icon size={24} />
                    </Link>
                  ))}
                </div>
              </div>
              {/* CHANGE 1: Made text bold, white, and prevented it from wrapping to a new line. */}
              <p className="text-xl font-bold text-white whitespace-nowrap">
                Comprehensively building the entire value chain from manufacturing to retail.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-2">
              {/* CHANGE 3: Increased vertical spacing between links from gap-4 to gap-6. */}
              <div className="flex flex-col gap-9">
                {navLinks1.map((link) => (
                  <Link key={link.label} href={link.href} className="text-xl hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* CHANGE 3: Increased vertical spacing between links from gap-4 to gap-6. */}
              <div className="flex flex-col gap-9">
                {navLinks2.map((link) => (
                  <Link key={link.label} href={link.href} className="text-xl hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="w-px bg-white/20"></div> {/* Vertical Divider */}
              <div className="flex flex-col gap-6 pt-2">
                <h3 className="font-bold text-xl text-white">Stay in the Loop. Move with Us.</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-white">Email</h4>
                    <a href="mailto:info@agilitas.in" className="underline hover:text-white">info@agilitas.in</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Corporate address</h4>
                    <address className="not-italic text-white/60">
                      Roshini Tech Hub,<br />
                      PFS Club House,<br />
                      Marathahalli Main Rd,<br />
                      Lakshminarayana Pura,<br />
                      EPIP Zone, Chinnapanna Halli,<br />
                      Bengaluru, Karnataka 560037
                    </address>
                    {/* CHANGE 2: "Get directions" link is now directly under the address. */}
                    <a href="#" className="flex items-center gap-2 hover:text-white mt-4">
                      <MapPin size={20} className="bg-white/20 rounded-full p-1" />
                      <span>Get directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-9 flex justify-between items-center">
          <p className="text-gray-500 text-xl">
            © 2025 Agilitas All rights reserved. 
            <Link href="#" className="underline hover:text-black ml-4">Terms of Use</Link>
            <span className="mx-2 text-gray-400">|</span>
            <Link href="#" className="underline hover:text-black">Privacy Policy</Link>
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Footer;