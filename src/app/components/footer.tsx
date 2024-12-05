import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <section className="py-10 bg-white sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
          <div className="flex items-center space-x-2">
  <img
    className="w-auto h-9"
    src="/kutakimlogo.jpg"
    alt="Logo"
  />
  <p className="text-black text-lg d font-semibold">KUTAKIM</p>
</div>
            <p className="text-base leading-relaxed text-gray-600 mt-7">
            Reach beyond the horizon

            </p>
            <a
              href="/contact"
              title="Start Live Chat"
              className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-950 rounded-md hover:bg-yellow-400 focus:bg-yellow-500 mt-7"
            >
              <svg
                className="w-6 h-6"
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
              Start Live Chat
            </a>
          </div>

          {[
            {
              title: 'Company',
              links: ['About', 'Services', 'Solutions'],
            },
            {
              title: 'Help',
              links: ['FAQ', 'Contact'],
            },
            {
              title: 'Resources',
              links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'YouTube Playlist'],
            },
            {
              title: 'Extra Links',
              links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
            },
          ].map((section, index) => (
            <div key={index} className="lg:col-span-2">
              <p className="text-base font-semibold text-gray-900">{section.title}</p>
              <ul className="mt-6 space-y-5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      title={link}
                      className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">© Copyright 2024, All Rights Reserved by Kutakim</p>
          <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
            {['Twitter', 'Facebook', 'Instagram'].map((platform, index) => (
              <li key={index}>
                <a
                  href="#"
                  title={platform}
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 hover:bg-yellow-400 hover:text-white hover:border-yellow-400"
                >
                  {/* Replace these with appropriate icons */}
                  <span>{platform[0]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
