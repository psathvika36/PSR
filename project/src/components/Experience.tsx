import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Professional Experience</h2>
        </div>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Java Developer</h3>
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              <span>Cotiviti Pvt. Ltd., India</span>
              <Calendar className="flex-shrink-0 mx-1.5 h-5 w-5 text-gray-400" />
              <span>Mar 2022 to Feb 2023</span>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Contributed to developing and optimizing Customer Management Systems (CMS) using Java and Spring Boot, focusing on backend functionalities and implementing RESTful APIs.</li>
                <li>Engaged in database management, including designing database schemas and writing SQL queries for data retrieval and manipulation.</li>
                <li>Developed front-end components using HTML, CSS, and implemented responsive design principles to improve user experience.</li>
                <li>Implemented microservices architecture to enhance the scalability and resilience of applications.</li>
                <li>Developed and maintained service orchestration and communication between microservices using tools like Spring Cloud and Apache Kafka.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;