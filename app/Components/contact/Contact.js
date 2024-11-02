"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaArrowUp } from "react-icons/fa";
import { MailIcon } from "lucide-react";

const contactInfo = [
  {
    icon: <FaPhone className="text-2xl" />,
    text: "+91-9711948121",
    link: "tel:+919711948121",
  },
  {
    icon: <FaEnvelope className="text-2xl" />,
    text: "himanshu4shukla4l@gmail.com",
    link: "mailto:himanshu4shukla4l@gmail.com",
  },
  {
    icon: <FaGithub className="text-2xl" />,
    text: "github.com/raghavshulka",
    link: "https://github.com/raghavshulka",
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    text: "linkedin.com/in/himanshushukla121",
    link: "https://linkedin.com/in/himanshushukla121",
  },
];

export default function Contact() {
  const [time, setTime] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        })
      );
    }, 1000);

    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="py-20 " id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Get in Touch</h2>
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let&apos;s Talk About Everything!
                </h3>
                <p className="text-gray-300">
                  Feel free to reach out for collaborations, opportunities, or
                  just a friendly chat.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors duration-300 p-4 bg-gray-700/50 rounded-lg"
                  >
                    <span className="text-blue-400">{info.icon}</span>
                    <span className="text-lg">{info.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                Made with ❤️ by
                <Link
                  href="https://github.com/raghavshulka"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Himanshu
                </Link>
              </p>
              <div className="hidden md:block h-6 border-l border-gray-600"></div>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-400">Local time:</p>
                <p className="text-sm font-semibold">{time} IST</p>
              </div>
            </div>
            <Link
              href="mailto:himanshu4shukla4l@gmail.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <MailIcon className="h-5 w-5" />
              <span className="text-sm">himanshu4shukla4l@gmail.com</span>
            </Link>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-8"></div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
}
