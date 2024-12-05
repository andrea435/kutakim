import React from 'react';
import Header from '@/app/components/header';

interface Service {
  name: string;
  description: string;
  link: string;
}



const services: Service[] = [
  {
    name: 'Microsoft Azure',
    description: 'A cloud computing service offering virtual machines, storage, and other cloud-based services.',
    link: 'https://azure.microsoft.com/',
  },
  {
    name: 'Microsoft Office 365',
    description: 'A suite of productivity applications including Word, Excel, PowerPoint, and more.',
    link: 'https://www.office.com/',
  },
  {
    name: 'Microsoft Teams',
    description: 'A collaboration platform for chat, video meetings, and file sharing.',
    link: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
  },
  {
    name: 'Microsoft Exchange Online',
    description: 'A cloud-based email service providing email, calendar, and contact management.',
    link: 'https://www.microsoft.com/en-us/microsoft-365/exchange/email',
  },
  {
    name: 'Microsoft Dynamics 365',
    description: 'A suite of business applications for CRM and ERP solutions.',
    link: 'https://dynamics.microsoft.com/',
  },
  {
    name: 'Microsoft SharePoint',
    description: 'A platform for creating websites, managing content, and collaborating on projects.',
    link: 'https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration',
  },
];


const MicrosoftServices: React.FC = () => {
  return (
    <><div>
      <Header />
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-12 px-4 py-16 sm:px-6 sm:py-8 lg:max-w-5xl lg:grid-cols-2 lg:px-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Microsoft Services Overview</h2>
            <p className="mt-4 text-gray-500">
              Discover the range of Microsoft services designed to enhance productivity and collaboration.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {services.map((service) => (
                <div key={service.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{service.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{service.description}</dd>
                  <a
                    href={service.link}
                    className="mt-2 inline-block text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                  >
                    Learn more
                  </a>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-10">
            <img
              alt="Microsoft Office 365"
              src="/microsoft.jpg" 
              className="rounded-lg bg-gray-100" />
            <img
              alt="Microsoft Azure"
              src="/Microsoft-Office-2021.jpg" 
              className="rounded-lg bg-gray-100" />
            <img
              alt="Microsoft Teams"
              src="/Microsoft-Office-2021.jpg" 
              className="rounded-lg bg-gray-100" />
            <img
              alt="Microsoft Dynamics 365"
              src="/microsoft.jpg" 
              className="rounded-lg bg-gray-100" />
          </div>
        </div>
      </div>
    </div></>
  );
}

export default MicrosoftServices;
