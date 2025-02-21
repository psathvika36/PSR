import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Feel free to reach out for opportunities or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:sathvikareddypothula@gmail.com"
            className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <Mail className="h-6 w-6 text-indigo-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-1 text-gray-500">sathvikareddypothula@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:9452740885"
            className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <Phone className="h-6 w-6 text-indigo-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-1 text-gray-500">(945) 274-0885</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/sathvika-pothula-4b3978206/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6 text-indigo-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">LinkedIn</h3>
              <p className="mt-1 text-gray-500">Connect with me</p>
            </div>
          </a>

          <a
            href="https://github.com/psathvika36"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <Github className="h-6 w-6 text-indigo-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">GitHub</h3>
              <p className="mt-1 text-gray-500">View my projects</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;