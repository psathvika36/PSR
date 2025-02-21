import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'JavaScript']
  },
  {
    title: 'Front-End Technologies',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'jQuery']
  },
  {
    title: 'Back-End Technologies',
    skills: ['Node.js', 'Spring Boot', 'Microservices Architecture']
  },
  {
    title: 'Web Services',
    skills: ['SOAP', 'RESTful APIs']
  },
  {
    title: 'Microservices',
    skills: ['Spring Cloud', 'Docker', 'Apache Kafka']
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'Maven', 'MySQL', 'JUnit', 'Selenium', 'Postman']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Technical Skills</h2>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;