import Image from "next/image";
import React from "react";

const movementLinks = [
  {
    title: "DISCOVER WHERE YOU FIT IN",
    image: "/images/discover-fit.png",
    widthClass: "w-[600px]",
  },
  {
    title: "VIBE WITH CREATORS WHO GET IT",
    image: "/images/vibe-creators.png",
    widthClass: "w-[600px]",
  },
];

const JoinMovementSection = () => {
  return (
    <section className="bg-white py-18 sm:py-32">
      <div className="mx-auto max-w-8xl px-9 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Join the movement
          </h2>
          <p className="mt-4 font-sans text-lg leading-8 text-gray-600">
            The next era is in motion - are you in?
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {movementLinks.map(({ title, image, widthClass }) => (
            <div
              key={title}
              className={`relative h-[180px] w-[200px] md:h-[400px] ${widthClass} overflow-hidden -skew-x-12`}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="skew-x-12 scale-120 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/10" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white sm:text-3xl">
                    {title}
                  </h3>
                  <div className="mx-auto mt-2 h-px w-3/4 bg-white" />
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
