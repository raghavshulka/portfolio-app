import React from 'react';

const HeaderSocials = () => {
  return (
    <div className="flex space-x-6">
      <a
        href="https://x.com/HimanshuSh30711"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <i className="fa-brands fa-twitter text-2xl"></i>
      </a>

      <a
        href="https://github.com/raghavshulka"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <i className="fa-brands fa-github text-2xl"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/himanshushukla121/"
        className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fa-brands fa-linkedin text-2xl"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
