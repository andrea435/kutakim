import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-16">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Why choose us?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
            Our experienced programmers listen attentively to your needs and can customize efficient and effective software solutions, no matter how complex they may be. Our team of developers patiently gives you time to explain your problem, but they are quick to craft a perfect solution for you.

            </p>
          </div>

          <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <img
                className="ml-auto"
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Person"
              />
              <img
                className="absolute -top-4 -left-12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                alt="Wavey Lines"
              />
              <div className="absolute -bottom-10 -left-16">
                <div className="bg-yellow-300">
                  <div className="px-8 py-10">
                    <span className="block text-4xl font-bold text-black lg:text-3xl">FAST</span>
                    <span className="block mt-2 text-base leading-tight text-black">
                      Remote
                      <br />
                      Assistance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
