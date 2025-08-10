
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Sport & Swagger",
    description: "Function first, fashion-always.",
    image: "/images/sport-swagger.png",
  },
  {
    title: "Culture in Motion",
    description:
      "Rewriting culture through rhythm, rebellion and raw expression.",
    image: "/images/culture-motion.png",
  },
  {
    title: "Live in Motion",
    description: "Made to move in all the ways that feel like you.",
    image: "/images/live-motion.png",
  },
];

const TransitionSection = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-[36px] font-semibold tracking-tight text-[#000000]
                       sm:text-5xl font-display leading-[44px]"
          >
           
            <span className="block md:hidden">Our vision for Lotto</span>

           
            <span className="hidden md:block">Tradition in Transition</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 font-sans">
            {/* Mobile subtitle */}
            <span className="block md:hidden">
              Reignite a legacy brand with new energy, rooted in:
            </span>

            
            <span className="hidden md:block">
              Reimagining a legacy fit to move with you
            </span>
          </p>
        </div>

        
        <div
          className="mx-auto mt-6 grid auto-rows-fr grid-cols-1 gap-6
                     sm:gap-8 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col px-2">
              
              <div className="relative w-full h-[370px] sm:h-[360px] md:h-[480px] overflow-hidden -skew-x-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transform skew-x-6 scale-110 md:scale-125 "
                  priority={false}
                />
              </div>

             
              <div className="text-center mt-4 md:mt-6">
                <h3 className="text-[28px] font-bold text-gray-900 font-display">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[18px] text-gray-700 font-sans">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransitionSection;
