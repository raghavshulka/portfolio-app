"use client";

import React, { useState } from 'react';
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterItem = (categoryItem) => {
    setActiveFilter(categoryItem);
    if (categoryItem === 'all') {
      setItems(Menu);
      return;
    }
    const updatedItems = Menu.filter(item => item.category === categoryItem); // Filter based on the category
    setItems(updatedItems);
  };

  const filterButtons = [
    { name: 'All', value: 'all' },
    // { name: 'Applications', value: 'Applications' },
    // { name: 'Case Study', value: 'Case Study' },
    // { name: 'Design', value: 'Design' }
  ];

  return (
    <section className="py-20" id="work">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white font-bold mb-4">
            Recent Works
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          {filterButtons.map((button) => (
            <button
              key={button.value}
              onClick={() => filterItem(button.value)}
              className={`mx-2 py-2 px-4 rounded-full ${activeFilter === button.value ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'} transition-all duration-300`}
            >
              {button.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={item.Image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mt-4">
                  {item.title}
                </h3>
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show when no items match filter */}
        {items.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            No projects found for this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
