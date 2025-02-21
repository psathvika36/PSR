import React from 'react';
import { Code, Server, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Software Development Project Management",
      date: "July 2024",
      description: "Managed a software development project using Agile methodologies, overseeing the entire project lifecycle.",
      skills: ["Agile Methodology", "Scrum", "Project Lifecycle Management"],
      icon: Code
    },
    {
      title: "Customer Relationship Management (CRM) System",
      date: "Sep 2023",
      description: "Designed a CRM system for managing customer interactions, sales tracking, and marketing campaigns.",
      skills: ["Java EE", "JSP/Servlets", "Apache Tomcat"],
      icon: Server
    },
    {
      title: "Network Security System",
      date: "Mar 2023",
      description: "Designed and implemented a network security system using firewalls, intrusion detection systems (IDS), and virtual private networks (VPNs).",
      skills: ["Network Security", "Firewall Configuration", "IDS/IPS", "VPN Setup"],
      icon: Shield
    }
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Academic Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center">
                    <IconComponent className="h-8 w-8 text-indigo-600" />
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">{project.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{project.date}</p>
                  <p className="mt-4 text-gray-600">{project.description}</p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;