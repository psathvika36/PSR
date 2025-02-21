import React from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Sathvika Pothula</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/psathvika36" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/sathvika-pothula-4b3978206/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:sathvikareddypothula@gmail.com" className="text-gray-500 hover:text-gray-700">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:9452740885" className="text-gray-500 hover:text-gray-700">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2025 Sathvika Pothula. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;