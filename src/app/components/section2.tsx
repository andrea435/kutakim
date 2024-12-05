import React from "react";

const SupportSection: React.FC = () => {
  return (
    <section className="pt-6 bg-white sm:pt-10 lg:pt-12">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
            Real humans are here to help you build your brand
          </h2>
          <p className="mt-4 text-base text-gray-900">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
          <a
            href="#"
            title="Contact our support"
            className="inline-flex items-center px-4 py-2 mt-8 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
          >
            <svg
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact our support
          </a>
        </div>
      </div>

      <div className="container mx-auto">
        
      </div>
    </section>
  );
};

export default SupportSection;
