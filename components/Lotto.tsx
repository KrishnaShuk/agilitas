import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const Lotto = () => {
  return (
    <footer className="bg-[#00282D] py-16 sm:py-20 mb-24 md:mb-32 mx-8 md:mx-20 rounded-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-display text-4xl font-bold text-[#FF004F] md:text-5xl">
            Explore Lotto
          </h2>
          <Link
            href="https://www.lottosport.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 hover:text-white transition"
          >
            <span className="font-display text-xl underline underline-offset-4 text-[#F5F5F5] md:text-3xl">
              www.lottosport.in
            </span>
            <ExternalLink size={20} className="hidden sm:inline" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Lotto;
