import Image from "next/image";
import React from "react";

const events = [
  {
    title: "Run Club Meetup",
    date: "Jun 25, 10 am",
    description: "Join local runners for a 5K, gear trials, and post-run smoothies.",
    image: "/images/event-1.png",
  },
  {
    title: "Custom Kicks Day",
    date: "Jun 26, 6 PM",
    description: "Design your pair. Add your name. Walk out with a one-of-one.",
    image: "/images/event-2.png",
  },
  {
    title: "Football Weekend",
    date: "Jun 28-29, 11 am",
    description: "Join us for skill challenges, mini matches, & the launch of our latest turf-ready kicks.",
    image: "/images/event-3.png",
  },
];

const ComingSoonSection = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-2 lg:px-1">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl font-display">
            Coming Soon
          </h2>
        </div>

        <div className="px-6 mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="relative md:h-[400px] md:w-[400px] h-[350px] w-full max-w-[350px] justify-self-center overflow-hidden skew-x-8"
            >
              <div className="w-full h-full relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="-skew-x-10 scale-120"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="-skew-x-12 relative h-full flex flex-col justify-end p-12 text-white">
                  <h3 className="text-3xl font-bold font-display">{event.title}</h3>
                  <p className="mt-2 text-xl font-medium font-display">{event.date}</p>
                  <p className="mt-4 text-base font-sans">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
