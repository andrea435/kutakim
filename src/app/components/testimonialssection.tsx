import React from "react";

const TestimonialSection: React.FC = () => {
  return (
    <section className="pt-8 bg-amber-400 sm:pt-12 md:pt-16">
      <div className="px-6 mx-auto rounded-md bg-amber-400 max-w-7xl sm:px-10 lg:px-12">
        <div>
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8">
            {/* Text Content */}
            <div className="text-center md:py-12 md:text-left">
              <blockquote>
                <p className="text-xl font-semibold leading-relaxed text-gray-900 sm:text-2xl">
                  “We design and implement wired and wireless networks tailored to client needs, ensuring optimal performance, cost-efficiency, and technical reliability”
                </p>
              </blockquote>
              <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                <p className="text-base font-bold text-blue-900 sm:text-lg">KUTAKIM</p>
                <p className="mt-1 text-sm text-gray-700 sm:mt-0 sm:ml-3 sm:text-base">
                  
                </p>
              </div>
              <p className="mt-8 text-base text-gray-900 sm:text-lg">
               
               
              </p>
            
            </div>
            {/* Image Content */}
            <div className="relative">
              <img
                className="md:absolute md:bottom-0 md:scale-75 md:origin-bottom-right lg:scale-72"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png"
                alt="Smiling Man"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
