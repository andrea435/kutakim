import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white">
      <header>
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-18">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-10"
                  src="/kutakimlogo.jpg"
                  alt="Logo"
                />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
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
                href="/contact"
                className="text-sm font-medium text-black transition-all duration-200 hover:text-opacity-80"
              >
                Contact
              </a>
              <div className="w-px h-4 bg-black/20"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-8 sm:py-12 lg:py-18">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold text-black sm:text-5xl lg:text-6xl">
                ICT solutions,{" "}
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[20px] border-[#000080]"></span>
                  <span className="relative text-3xl font-bold text-black sm:text-5xl lg:text-6xl">
                    Kutakim.
                  </span>
                </div>
              </h1>

              <p className="mt-6 text-sm text-black sm:text-lg">
              Our experts handle network configuration, including routers, switches, firewalls, and VPN setups, across multiple locations for seamless connectivity.
              </p>

              <div className="mt-8 sm:flex sm:items-center sm:space-x-6">
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-black transition-all duration-200 bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500"
                >
                  Start exploring
                </a>
                <a
                  href="#"
                  className="inline-flex items-center mt-4 text-sm font-medium transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <svg
                    className="w-8 h-8 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#F97316"
                      stroke="#F97316"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch video
                </a>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
