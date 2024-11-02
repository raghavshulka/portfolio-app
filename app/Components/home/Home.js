import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

const Home = () => {
  return (
    <section className="pt-[200px] relative mx-auto py-16 px-6 md:px-12 flex flex-col items-center">
      <div className="intro text-center">
        <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
          <span className="block">
            Hello, I&apos;m <br />
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            Himanshu.
          </span>
        </span>
        <p className="mt-4 max-w-lg mx-auto text-lg md:text-xl text-gray-500 tracking-tight">
          An experienced full-stack website developer with a passion for crafting unique digital experiences.
        </p>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center items-center justify-center ">
          <div className="flex space-x-4">
            <a
              href="https://x.com/HimanshuSh30711"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>

            <a
              href="https://github.com/raghavshulka"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/himanshushukla121/"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
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
