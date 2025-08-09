// components/PlaybookSection.tsx
import Image from "next/image";
import React from "react";

const PlaybookSection = () => {
  return (
    // Main container for the entire section.
    // - "mx-auto" centers it.
    // - "flex" creates the side-by-side layout.
    // - The fixed height has been REMOVED to allow the image to define the height.
    <section 
      className="flex mx-auto" 
      
    >
      {/* Left Column (The Black Box) */}
      {/* 
        - "self-stretch" is a key utility that makes this black box automatically stretch
          its height to match the height of the image column next to it.
      */}
      <div 
        className="bg-black text-white flex items-center justify-center self-stretch p-12" 
        style={{ width: '598px' }}
      >
        <div className="max-w-md">
          <p className="font-display text-4xl font-semibold leading-snug">
            Agilitas is turning up the volume on Lotto's presence and creating
            momentum across markets. In India, it's not just part of the
            conversation—it's writing the whole playbook.
          </p>
        </div>
      </div>

      {/* Right Column (The Single Image) */}
      <div className="relative flex-1">
        {/*
          CHANGE: "object-cover" has been replaced with "object-contain".
          - object-contain: Scales the image to FIT INSIDE the container while maintaining its 
            aspect ratio. This ensures the entire image is visible without being cropped.
        */}
        <Image 
          src="/images/full-collage.png" 
          alt="A collage of people wearing Lotto brand shoes in various settings"
          className="object-contain"
          // We need to provide the image's actual dimensions for the best layout results.
          // Replace these with your image's true width and height.
          width={843} 
          height={552}
          // The layout="responsive" prop makes the image scale with its container.
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default PlaybookSection;