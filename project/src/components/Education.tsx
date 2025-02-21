import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science",
      major: "Information Technology and Management (ITM)",
      school: "Campbellsville University",
      location: "Kentucky, USA",
      period: "03/2023 - 10/2024"
    },
    {
      degree: "Bachelor of Technology",
      major: "Electronics and Communication Engineering (ECE)",
      school: "JNTUH",
      location: "Hyderabad, India",
      period: "06/2017 - 09/2021"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Education</h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg text-gray-600">{edu.major}</p>
                </div>
              </div>
              <div className="mt-4 ml-12">
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-600">{edu.location}</p>
                <div className="flex items-center mt-2 text-gray-500">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;