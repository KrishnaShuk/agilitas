// components/Lotto.tsx
import { ExternalLink } from 'lucide-react'; 
import Link from 'next/link';
import React from 'react';

// CHANGE: Component name updated from Footer to Lotto
const Lotto = () => {
  return (
    <footer className="bg-[#00282D] py-20 mb-[125px] mx-42 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-center gap-4">
          
          <h2 className="font-display text-5xl font-bold text-[#FF004F]">
            Explore Lotto
          </h2>
          
          <Link 
            href="https://www.lottosport.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 hover:text-white transition"
          >
            <span className="font-display text-3xl underline underline-offset-4 text-[#F5F5F5]">
              www.lottosport.in
            </span>
            <ExternalLink size={20} />
          </Link>

        </div>
      </div>
    </footer>
  );
};

// CHANGE: Export name updated to match the component
export default Lotto;