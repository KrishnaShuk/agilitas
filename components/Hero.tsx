// components/HeroSection.tsx
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
    <section className="relative w-full  min-h-[750px] h-[750px] overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/Hero.png"
          alt="Hero"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-50 px-10 md:px-16">
        <h1 className="text-white text-7xl md:text-7xl font-display font-semibold drop-shadow-xl mb-2 text-right">
          A Whole Lotto Joy
        </h1>
      </div>

     
    </section>
  <section className="relative -mt-30 w-full h-[190px]">
  {/* Outer container aligned to right */}
  <div className="absolute right-0 w-[358px] md:w-[1181px] h-full">
    {/* Teal Parallelogram */}
    <div
      className="absolute inset-0 bg-[#002828]"
      style={{
        clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }}
    />

    {/* Blue Triangle */}
    <div
      className="absolute bottom-0 right-0 w-[20%] h-full bg-[#1024F6]"
      style={{
        clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
      }}
    />

    {/* Text content - full height & flex center */}
    <div className="relative z-10 h-full w-full flex items-center justify-center px-6 md:px-10 text-white">
      <p className="text-base md:text-2xl leading-relaxed  font-display font-semibold">
        Lotto is stepping into its new era with Agilitas as its compass.
        <br />
        A journey that is familiar, reborn with a new purpose.
      </p>
    </div>
  </div>
</section>

    </>
  );
};

export default HeroSection;
