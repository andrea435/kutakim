import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-white">
      <div className="text-white bg-yellow-500 rounded-b-3xl">
        <div className="px-8 py-20 mx-auto sm:max-w-lg md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 lg:py-20">
          <div className="max-w-xl flex flex-col justify-center items-center mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-16">
            <div>
              {/* You can add any content here if needed */}
            </div>
            <h2 className="text-center tracking-wide max-w-lg mb-6 text-3xl font-bold leading-tight text-blue-950 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-28 -mt-6 -ml-16 text-white lg:w-28 lg:-ml-24 lg:-mt-8 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[20px] border-[#000080]"></span>
                  <span className="relative text-2xl font-bold text-white sm:text-3xl lg:text-5xl">
                    Solutions
                  </span>
                </div>
              </span>
            </h2>
            <p className="text-lg text-center text-blue-950 md:text-base font-light">
              Our team of experienced professionals is committed to delivering
              exceptional service and innovative strategies.
            </p>
          </div>
          <div className="flex items-center justify-center">
            {/* Add any additional content here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
