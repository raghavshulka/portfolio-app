import React from "react";
import AboutBox from "./AboutBox";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const SkillIcon = ({ Icon, name, color }) => (
  <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
    <div className="p-4 rounded-lg  shadow-md hover:shadow-lg">
      <Icon className={`text-5xl ${color}`} />
    </div>
    <span className="mt-3 text-lg font-medium text-gray-800">{name}</span>
  </div>
);

const About = () => {
  const skills = [
    { Icon: FaReact, name: "React", color: "text-blue-500" },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-gray-800" },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { Icon: FaDatabase, name: "SQL", color: "text-yellow-500" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-blue-400" },
  ];

  return (
    <section className="" id="about">
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            {/* About Text Section */}
            <div className="flex-1 space-y-8">
              <div className="prose prose-lg">
                <p className="text-lg text-gray-400 leading-relaxed">
                  Aspiring Full Stack Developer with a strong foundation in web
                  technologies and hands-on experience with the MERN stack.
                  Proficient in JavaScript, React.js for front-end development,
                  and Node.js with Express.js for back-end solutions. Skilled in
                  creating responsive user interfaces and RESTful APIs.
                  Passionate about learning new technologies and applying them
                  to real-world projects. Eager to contribute fresh perspectives
                  and academic knowledge to a dynamic development team while
                  further expanding skills in a professional setting.
                </p>
              </div>

              {/* Resume Button */}
              <div className="pt-4">
                <a
                  href="https://drive.google.com/file/d/1PLwkv3GqxTsYpNj-vGctJbGhZlV4q9QB/view?usp=sharing"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Download Resume</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <SkillIcon
                    key={index}
                    Icon={skill.Icon}
                    name={skill.name}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* About Box Component */}
          <div className="mt-20">
            <AboutBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
