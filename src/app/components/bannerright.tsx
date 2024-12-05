import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import React from 'react';

const BannerRight: React.FC = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
          <img
            alt="Background"
            src="https://images.unsplash.com/photo-1602763288580-927cfda37a72?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center lg:pl-12 lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl text-blue-950">Smart Surveillance Systems</h2>

          <p className="mt-4 text-gray-600">
          We provide intelligent surveillance packages for supermarkets, warehouses, schools, and cities. Our AI-powered systems ensure security for all areas, including homes.

          
          </p>

         
        </div>
      </div>
    </div>
  </section>
);

export default BannerRight;

