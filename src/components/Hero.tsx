import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { Ripple } from "./magicui/ripple";
import MainButton from "./ui/MainButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="pt-36">
      <div>
        {/* spotlight */}
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/*  */}
      <div className="relative flex h-[50rem] w-full items-center justify-center">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,#080b20_5px,transparent_1px),linear-gradient(to_bottom,#080b20_5px,transparent_1px)]"
            // "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-custom-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* info */}
        <div className="lg:flex items-center justify-between">
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col">
              {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Web Developer</p> */}

              <TextGenerateEffect
                duration={2}
                filter={false}
                words="Building Digital Worlds One Pixel and Line of Code at a Time"
                className="text-[40px] md:text-5xl lg:text-6xl"
              />

              <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Hi! I&apos;m Ashikul Islam Nayeem.</p>
              <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
                With a great passion for the technological world, both Frontend and Backend, pursuing new challenges and continually exploring new
                trends.
              </p>

              <a href="#about">
                <MainButton title="View CV" icon={<FaLocationArrow />} position="right" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
            <div className="relative aspect-square flex items-center justify-center">
              <Ripple className="absolute inset-0 rounded-full opacity-70 scale-110" />
              <Image
                src="https://i.ibb.co/6RZRB35L/round-pp.png"
                alt="Profile"
                width={400}
                height={400}
                className="relative z-10 rounded-full object-cover border-4 border-indigo-500 shadow-xl p-1"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
