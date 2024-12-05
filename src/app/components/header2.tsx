import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 bg-yellow-500">
        <div className="flex items-center justify-between h-14 lg:h-18">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" title="Home" className="flex">
              <img
                className="w-auto h-7"
                src="/kutakimlogo.jpg"
                alt="Logo"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            aria-label="Toggle Navigation"
          >
            <svg
              className="block w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className="hidden w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <a
              href="/about"
              className="text-sm font-medium text-black transition-all duration-200 hover:text-opacity-80"
            >
              About
            </a>
            <a
              href="/solutions"
              className="text-sm font-medium text-black transition-all duration-200 hover:text-opacity-80"
            >
              Solutions
            </a>
            <a
              href="/services"
              className="text-sm font-medium text-black transition-all duration-200 hover:text-opacity-80"
            >
              Services
            </a>
            <a
              href="contact"
              className="text-sm font-medium text-black transition-all duration-200 hover:text-opacity-80"
            >
              Contact
            </a>
            <div className="w-px h-4 bg-black/20"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
