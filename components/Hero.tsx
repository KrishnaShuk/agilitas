"use client";

import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
     <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }} 
    >
    <section className="relative w-full overflow-hidden">
      
      <div className="relative w-full h-[336px] md:h-[699px] overflow-hidden">
        <picture>
          
          <source srcSet="/images/Hero.png" media="(min-width: 768px)" />
         
          <Image
            src="/images/Hero-mobile.png"
            alt="Hero"
            fill
            className="object-cover object-left"
            priority
          />
        </picture>

       
        <div
          className="
            absolute bottom-6 right-6 w-[200px]
            md:h-auto md:w-auto md:bottom-12 md:right-16
            pb-[75px] z-10
          "
        >
          <h1 className="text-white text-4xl md:text-7xl font-display font-semibold drop-shadow-xl text-right">
            A Whole Lotto Joy
          </h1>
        </div>
      </div>

      
      <section className="relative -mt-20 w-full h-[190px]">
        <div className="absolute right-0 w-[358px] md:w-[1181px] h-full">
          
          <div
            className="absolute inset-0 bg-[#00282D]"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />

          
          <div className="relative z-10 h-full md:w-full w-[320px] flex items-center justify-center px-9 md:px-10 text-white">
            <p className="text-base md:text-2xl leading-relaxed font-display font-semibold">
              Lotto is stepping into its new era with Agilitas as its compass.
              <br />
              A journey that is familiar, reborn with a new purpose.
            </p>
          </div>

          
          <div
            className="absolute bottom-0 right-0 w-[20%] h-full bg-[#1024F6]"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </section>
    </section>
    </motion.section>
  );
};

export default HeroSection;
