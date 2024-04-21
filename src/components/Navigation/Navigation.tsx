"use client"

import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-wedding-bg w-full fixed top-0 shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-wedding-text font-bold">Logo</div>
          <div className="md:hidden">
            <button onClick={handleClick} className="text-wedding-text focus:outline-none">
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
            <a href="#" className="text-wedding-text px-4 py-2 font-satisfy">Home</a>
            <a href="#" className="text-wedding-text px-4 py-2 font-satisfy">About</a>
            <a href="#" className="text-wedding-text px-4 py-2 font-satisfy">Services</a>
            <a href="#" className="text-wedding-text px-4 py-2 font-satisfy">Contact</a>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 text-center">
            <a href="#" className="block text-wedding-text px-4 py-2 font-satisfy">Home</a>
            <a href="#" className="block text-wedding-text px-4 py-2 font-satisfy">About</a>
            <a href="#" className="block text-wedding-text px-4 py-2 font-satisfy">Services</a>
            <a href="#" className="block text-wedding-text px-4 py-2 font-satisfy">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
