import React from "react";
import HeaderSocials from "./HeaderSocials";

const Home = () => {
  return (
    <section className=" pt-[200px] mx-auto py-16 px-6 md:px-12 flex flex-col items-center">
      <div className="intro text-center">
        <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
          <span className="block">
            Hello, I&apos;m
            <br />
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            Himanshu.
          </span>
        </span>

        <p className="mt-4 max-w-lg mx-auto text-lg md:text-xl text-gray-500 tracking-tight">
          An experienced full-stack website developer with a passion for
          crafting unique digital experiences.
        </p>

        <div className="flex justify-center mt-6  items-center  ">
          <HeaderSocials />
        </div>

        <a
          href="#contact"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Home;
