"use client";
import React, { useEffect, useState } from "react";

const TrustedSection: React.FC = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-9 bg-white sm:py-12 lg:py-10">
      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-blue-950 sm:text-3xl">
            Offering World Class services to you.       
            Remotely, Anywhere.
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-8 lg:mt-12 gap-y-12 md:grid-cols-3 gap-x-8">
          {/* Card 1 */}
          <div
            className="md:px-6 lg:px-8 fade-in"
            style={{
              animation: inView ? 'fadeIn 1s ease-out forwards' : '',
            }}
          >
            <img
              className="transform transition-transform duration-500 hover:scale-105"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg"
              alt="Join as a team"
            />
            <h3 className="mt-6 text-xl font-semibold leading-tight text-black">
            Tailored Network Solutions
            </h3>
            <p className="mt-3 text-base text-gray-600">
            We plan, and design wired or wireless networks by evaluating client requirements, ensuring optimal operation, cost-efficiency, and technical capabilities

            </p>
          </div>

          {/* Card 2 */}
          <div
            className="md:px-6 lg:px-8 fade-in"
            style={{
              animation: inView ? 'fadeIn 1s ease-out forwards' : '',
            }}
          >
            <img
              className="transform transition-transform duration-500 hover:scale-105"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg"
              alt="Work from anywhere"
            />
            <h3 className="mt-6 text-xl font-semibold leading-tight text-black">
            Professional Network Implementation
            </h3>
            <p className="mt-3 text-base text-gray-600">
            Our expert team ensures efficient topology design and timely execution, tailored to your operating environment.

            </p>
          </div>

          {/* Card 3 */}
          <div
            className="md:px-6 lg:px-8 fade-in"
            style={{
              animation: inView ? 'fadeIn 1s ease-out forwards' : '',
            }}
          >
            <img
              className="transform transition-transform duration-500 hover:scale-105"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
              alt="Get success"
            />
            <h3 className="mt-6 text-xl font-semibold leading-tight text-black">
            Comprehensive Network Configuration Services
            </h3>
            <p className="mt-3 text-base text-gray-600">
            We configure all your network devices, including routers, switches, and firewalls.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedSection;
