import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import React from 'react';

const MissionVision: React.FC = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
          <img
            alt="Background"
            src="https://images.unsplash.com/photo-1633114127408-af671c774b39?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center lg:pl-12 lg:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl text-blue-950">Affordable Solutions</h2>

          <p className="mt-4 text-gray-600">
          We sell all ICT-related hardware and software at prices that wont break the bank!
          
          </p>

         
        </div>
      </div>
    </div>
  </section>
);

export default MissionVision;


 
