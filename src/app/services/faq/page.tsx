"use client"
import Header from '@/app/components/header';
import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <><Header /><section className="py-10 bg-white sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
              <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[20px] border-[#f3e24a]"></span>
                  <span className="relative text-3xl font-bold text-black sm:text-5xl lg:text-6xl">
                    FAQs
                  </span>
                </div>
                  <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                      Frequently Asked Questions
                  </p>
              </div>

              <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                  {[
                      {
                          question: 'How to create an account?',
                          answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                      },
                      {
                          question: 'How can I make payment using Paypal?',
                          answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                      },
                      {
                          question: 'Can I cancel my plan?',
                          answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                      },
                      {
                          question: 'How can I reach support?',
                          answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                      },
                  ].map((faq, index) => (
                      <div
                          key={index}
                          className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
                      >
                          <button
                              type="button"
                              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                              onClick={() => handleToggle(index)}
                          >
                              <span className="flex text-lg font-semibold text-black">{faq.question}</span>
                              <svg
                                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                              >
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                              </svg>
                          </button>

                          <div
                              className={`px-4 pb-5 sm:px-6 sm:pb-6 transition-all duration-200 ${activeIndex === index ? 'block' : 'hidden'}`}
                          >
                              <p>
                                  {faq.answer}{' '}
                                  <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline">
                                      aliqua dolor
                                  </a>{' '}
                                  do amet sint. Velit officia consequat duis enim velit mollit.
                              </p>
                          </div>
                      </div>
                  ))}
              </div>

              <p className="text-center text-gray-600 text-base mt-9">

                  <a href="/contact" title="" className="font-medium text-blue-900 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                      Contact our support
                  </a>
              </p>
          </div>
      </section></>
  );
};

export default FAQSection;
