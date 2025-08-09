// components/TransitionSection.tsx
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
    description: "Rewriting culture through rhythm, rebellion and raw expression.",
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
          <h2 className="text-[36px] font-semibold tracking-tight text-[#000000] sm:text-5xl font-display leading-[44px]">
            Tradition in Transition
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-sans">
            Reimagining a legacy fit to move with you
          </p>
        </div>

        <div className="mx-auto mt-6 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              {/* 
                CHANGE: This is the container that creates the skewed parallelogram "mask".
                - It must have "relative" and "overflow-hidden".
              */}
              <div className="relative h-[480px] overflow-hidden -skew-x-6">
                {/*
                  CHANGE: The un-skew and scale transforms are now applied DIRECTLY to the Image component.
                  - "skew-x-12": This is the reverse skew that cancels out the parent's skew, straightening the image.
                  - "scale-125": This scales the image up slightly to ensure it fills the entire skewed frame, preventing any empty corners. You can adjust this value (e.g., "scale-110", "scale-150") if needed.
                */}
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  className="object-cover skew-x-6 scale-125"
                  fill 
                />
              </div>
              
              <div className="text-center mt-6">
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