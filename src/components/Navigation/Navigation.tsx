"use client"

import React, { useState } from "react";
import Avatar from "@/components/Avatar/Avatar";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="w-full justify-between items-center shadow-wedding z-10 backdrop-blur-md bg-white/40 border-b border-gray-200/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* <div className="text-cyan-700 font-bold">Logo</div> */}
          <Avatar imgSrc={`${process.env.basePath}/images/logo.png`} isLogo={true} />
          <div className="md:hidden">
            <button onClick={handleClick} className="text-cyan-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex flex-grow items-center justify-end">
            <a href="#" className="text-cyan-700 px-4 py-2 font-satisfy hover:text-gray-600">Home</a>
            <a href="#" className="text-cyan-700 px-4 py-2 font-satisfy hover:text-gray-600">About</a>
            <a href="#" className="text-cyan-700 px-4 py-2 font-satisfy hover:text-gray-600">Services</a>
            <a href="#" className="text-cyan-700 px-4 py-2 font-satisfy hover:text-gray-600">Contact</a>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 text-center">
            <a href="#" className="block text-cyan-700 px-4 py-2 font-satisfy hover:text-gray-600">Home</a>
            <a href="#" className="block text-cyan-700 px-4 py-2 font-satisfy hover:text-gray-600">About</a>
            <a href="#" className="block text-cyan-700 px-4 py-2 font-satisfy hover:text-gray-600">Services</a>
            <a href="#" className="block text-cyan-700 px-4 py-2 font-satisfy hover:text-gray-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
