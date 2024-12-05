import React from 'react';

const BannerLeft: React.FC = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
          <img
            alt="Background"
            src="https://images.unsplash.com/photo-1624571395775-253d9666612b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center lg:pl-12 lg:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl text-blue-950">Remote/virtual ICT department</h2>

          <p className="mt-4 text-gray-600">
           We can be a virtual assistant to any organisation, regardless of size. Our support personnel are on standby to act as your IT department, providing you with daily support. 
          </p>

          
        </div>
      </div>
    </div>
  </section>
);

export default BannerLeft;
