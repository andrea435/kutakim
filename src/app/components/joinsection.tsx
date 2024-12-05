import React from "react";

const JoinSection: React.FC = () => {
  return (
    <section className="py-8 bg-white sm:py-12 lg:py-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          {/* Avatar Group */}
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                alt="Female Avatar 1"
              />
            </div>
            <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-24 h-24">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                alt="Male Avatar 1"
              />
            </div>
            <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                alt="Female Avatar 2"
              />
            </div>
          </div>

          {/* Heading and Text */}
          <h2 className="mt-6 text-2xl font-bold leading-tight text-black lg:mt-10 sm:text-3xl lg:text-4xl">
            Join <span className="border-b-8 border-yellow-300">US</span>{" "}
            today!
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-gray-600 md:mt-8">
          We offer expert ICT consulting and tailored technology solutions to boost your business efficiency and growth.
          </p>

          {/* Button */}
          <a
            href="/contact"
            title="Get instant access"
            className="inline-flex items-center justify-center px-4 py-4 mt-6 font-semibold text-white transition-all duration-200 bg-blue-950 border border-transparent rounded-md lg:mt-8 hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
