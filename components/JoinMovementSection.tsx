// components/JoinMovementSection.tsx
import Image from "next/image";
import React from "react";

// Data for the two cards, making it easy to change text or images later.
const movementLinks = [
  {
    title: "DISCOVER WHERE YOU FIT IN",
    // IMPORTANT: Replace with your actual image path in the /public folder
    image: "/images/discover-fit.png", 
    width: "w-[600px]", // Custom width for the first card
  },
  {
    title: "VIBE WITH CREATORS WHO GET IT",
    // IMPORTANT: Replace with your actual image path in the /public folder
    image: "/images/vibe-creators.png", 
    width: "w-[600px]", // Custom width for the second card
  },
];

const JoinMovementSection = () => {
  return (
    // Section container with standard vertical padding
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        
        {/* Centered headline and sub-headline */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl font-display">
            Join the movement
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 font-sans">
            The next era is in motion - are you in?
          </p>
        </div>

        {/* Flex container to hold and center the two cards */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
          {movementLinks.map((link) => (
            // Container for each individual card
            <div
              key={link.title}
              // Classes for the skewed parallelogram shape and specific width
              className={`relative h-[400px] ${link.width} overflow-hidden -skew-x-12`}
            >
              {/* Image component with reverse skew and scale to appear straight */}
               <Image
                  src={link.image}
                  alt={link.title}
                  fill
                  className=" skew-x-12 scale-120" // <-- ADD "object-top"
                />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/10"></div>

              {/* Container to center the text content */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  {/* The main title text */}
                  <h3 className="font-display text-3xl font-bold text-white uppercase tracking-wider">
                    {link.title}
                  </h3>
                  {/* The white underline element */}
                  <div className="mt-2 h-px w-3/4 mx-auto bg-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinMovementSection;