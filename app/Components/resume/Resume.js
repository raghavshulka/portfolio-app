"use client"

import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Data = [
  {
    id: 1,
    category: "education",
    title: "Bachelor of Technology",
    subtitle: "Dr. Akhilesh Das Gupta Institute of Technology & Management (IPU)",
    year: "2022 - 2026",
    desc: "Artificial Intelligence and Data Science"
  },
  {
    id: 2,
    category: "experience",
    title: "Web Development Intern",
    subtitle: "Carissa International",
    year: "June 2024 - August 2024",
    desc: [
      "Developed and optimized company's landing page using MERN stack",
      "Identified and resolved bugs, improving site performance",
      "Collaborated with design team on responsive UI implementation"
    ]
  }
];

const Card = ({ icon, title, subtitle, year, desc }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl bg-[rgba(13,13,35,0.5)] bg-gradient-to-br from-transparent to-[#0d0d23] backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-3xl text-blue-400 mt-1">
          {icon}
        </span>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-blue-300">{year}</p>
        </div>
      </div>
      <h4 className="text-lg font-medium text-gray-300 mb-2">{subtitle}</h4>
      <div className="mt-auto">
        {Array.isArray(desc) ? (
          <ul className="list-none space-y-2">
            {desc.map((item, index) => (
              <li key={index} className="text-sm text-gray-400 flex items-start">
                <span className="text-blue-400 mr-2 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm">{desc}</p>
        )}
      </div>
    </motion.div>
  );
};

export default function Component() {
  return (
    <section className="py-20 text-white" id="resume">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Experience & Education
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '5rem' }}
          transition={{ duration: 0.5 }}
          className="h-1 bg-blue-400 mx-auto mb-12"
        ></motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-blue-400" />
              Education
            </h3>
            <div className="grid gap-6">
              {Data.filter(val => val.category === "education").map((val, id) => (
                <Card
                  key={id}
                  title={val.title}
                  subtitle={val.subtitle}
                  year={val.year}
                  desc={val.desc}
                />
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaBriefcase className="text-blue-400" />
              Experience
            </h3>
            <div className="grid gap-6">
              {Data.filter(val => val.category === "experience").map((val, id) => (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  subtitle={val.subtitle}
                  year={val.year}
                  desc={val.desc}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}