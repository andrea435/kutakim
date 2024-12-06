import React from 'react';

const ProjectSection: React.FC = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-16">
      <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <img
              className="absolute -right-5 -bottom-6 xl:-bottom-8 xl:-right-4"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt="Dots Pattern"
            />
            <div className="pl-0 pr-2">
              <img
                className="relative"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Girl Working on Laptop"
              />
            </div>
            <div className="absolute left-0 pr-12 bottom-8 lg:bottom-10">
              <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-medium text-white sm:text-lg">
                        “You made it so simple. My new site is so much faster and easier to work with than my old site.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl lg:leading-tight">
              We make things easy for you.
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 mt-9">
            Kutakim Zimbabwe is led by seasoned IT professionals and employs well-qualified staff to meet all ICT requirements, ensuring top-notch service.

            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
