import Image from "next/image";
import React from "react";

const PlaybookSection = () => {
  return (
    <section className="flex flex-col md:flex-row mx-auto w-full overflow-hidden">
      <div className="bg-black text-white flex items-center justify-center p-6 md:p-12 order-1 md:order-none w-full md:max-w-[598px]">
        <div className="max-w-m py-5 min-h-[300px]">
          <p className="font-display text-2xl md:text-4xl font-semibold leading-snug">
            Agilitas is turning up the volume on Lotto's presence and creating
            momentum across markets. In India, it's not just part of the
            conversation—it's writing the whole playbook.
          </p>
        </div>
      </div>

      <div className="relative flex-1 order-2 md:order-none">
        <Image
          src="/images/full-collage.png"
          alt="A collage of people wearing Lotto brand shoes in various settings"
          className="object-contain w-full h-auto"
          width={843}
          height={552}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default PlaybookSection;
