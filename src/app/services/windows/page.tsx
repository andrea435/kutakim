import React from 'react';
import Link from 'next/link'; // Import Next.js Link component
import Header from '@/app/components/header';
import FooterSection from '@/app/components/footer';

interface Service {
  name: string;
  description: string;
  link: string;
}

const services: Service[] = [
  { 
    name: 'Windows Update', 
    description: 'Keeps Windows up-to-date with the latest updates and patches.', 
    link: '/windowsservices/windowsupdates' // Internal link to the WindowsUpdates page
  },
  { 
    name: 'Windows Defender', 
    description: 'Provides protection against malware and viruses.', 
    link: 'https://www.microsoft.com/en-us/windows/comprehensive-security' // External link
  },
  { 
    name: 'Print Spooler', 
    description: 'Manages print jobs sent to the printer.', 
    link: 'https://support.microsoft.com/en-us/windows/fix-printer-problems-in-windows-10-27f6f192-3d44-43a3-8954-2868429f1ae9' // External link
  },
  { 
    name: 'Background Intelligent Transfer Service (BITS)', 
    description: 'Transfers files in the background.', 
    link: 'https://learn.microsoft.com/en-us/windows/win32/bits/background-intelligent-transfer-service-portal' // External link
  },
  { 
    name: 'Remote Desktop Services', 
    description: 'Allows remote access to the Windows desktop.', 
    link: 'https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/welcome-to-rds' // External link
  },
  { 
    name: 'Windows Event Log', 
    description: 'Logs system, security, and application events.', 
    link: 'https://learn.microsoft.com/en-us/windows/win32/eventlog/event-logging-portal' // External link
  },
];

const WindowsServices: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Windows Services Overview</h2>
            <p className="mt-4 text-gray-500">
              Here is an overview of some essential Windows services that ensure smooth operation and security of your system.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {services.map((service) => (
                <div key={service.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{service.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {service.description}{' '}
                    {/* Conditionally handle internal and external links */}
                    {service.link.startsWith('http') ? (
                      <a href={service.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        Learn more
                      </a>
                    ) : (
                      <Link href={service.link} className="text-blue-600 hover:underline">
                        Learn more
                      </Link>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="Windows Update interface"
              src="https://images.unsplash.com/photo-1602763288580-927cfda37a72?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
              className="rounded-lg bg-gray-100" />
            <img
              alt="Windows Defender interface"
              src="https://images.unsplash.com/photo-1633114127408-af671c774b39?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
              className="rounded-lg bg-gray-100" />
            <img
              alt="Print Spooler interface"
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
              className="rounded-lg bg-gray-100" />
            <img
              alt="Background Intelligent Transfer Service interface"
              src="https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
              className="rounded-lg bg-gray-100" />
          </div>
        </div>
      </div>
      <FooterSection/>
    </div>
  );
}

export default WindowsServices;
