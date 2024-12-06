import React from "react";

const IntegrationSection: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-2">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/services/windows"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden bg-white rounded shadow"
          >
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="/cdnlogo.com_microsoft-windows.svg"
                  alt="Windows Logo"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-black">Windows</p>
                  <p className="mt-px text-sm text-gray-600">Direct Integration</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Windows Services and Solutions 
              </p>
            </div>
          </a>

          <a
            href="/services/linux"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden bg-white rounded shadow"
          >
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="/cdnlogo.com_linux-tux.svg"
                  alt="Linux Logo"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-black">Linux</p>
                  <p className="mt-px text-sm text-gray-600">Direct Integration</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Linux Services and Solutions 
              </p>
            </div>
          </a>

          <a
            href="/services/microsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden bg-white rounded shadow"
          >
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="/cdnlogo.com_microsoft-365.svg"
                  alt="Shopify Logo"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-black">Microsoft 365</p>
                  <p className="mt-px text-sm text-gray-600">Direct Integration</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Microsoft 365 Provisions
              </p>
            </div>
          </a>

          <a
            href="/solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden bg-white rounded shadow"
          >
            <div className="p-8">
              <div className="flex items-center">
              
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="/surveillance-camera-free-2-svgrepo-com.svg"
                  alt="Intercom Logo"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-black">Surveillance</p>
                  <p className="mt-px text-sm text-gray-600">Direct Integration</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Samrt Surveillance Services.
              </p>
            </div>
          </a>

          <a
            href="/solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden bg-white rounded shadow"
          >
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="/network-backup-svgrepo-com.svg"
                  alt="Twitter Logo"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-black">Networking</p>
                  <p className="mt-px text-sm text-gray-600">Direct Integration</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Networking connections and servcies
              </p>
            </div>
          </a>

          <a
            href="/solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden bg-white rounded shadow"
          >
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="/virtual-desktop-svgrepo-com.svg"
                  alt="Sketch Logo"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-black">Virtual Assistance</p>
                  <p className="mt-px text-sm text-gray-600">Direct Integration</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Remote and Virtual ICT Assistance
              </p>
            </div>
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default IntegrationSection;
