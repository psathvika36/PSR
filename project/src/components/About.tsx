import React from "react";
import { FaCode, FaPuzzlePiece, FaBookOpen, FaLightbulb, FaMusic } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-50 mt-16"> {/* Added mt-16 for more space */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">About Me</h2>
        <p className="mt-2 text-gray-600">
          <strong className="text-gray-900">Java Developer</strong> passionate about coding, problem-solving & innovation.
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">💡 Expertise:</h3>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="flex items-center justify-center"><FaCode className="text-blue-500 mr-2" /> Writing clean, efficient code</li>
            <li className="flex items-center justify-center"><FaPuzzlePiece className="text-blue-500 mr-2" /> Solving complex problems</li>
            <li className="flex items-center justify-center"><FaBookOpen className="text-blue-500 mr-2" /> Always learning new tech</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">🎭 Beyond Work:</h3>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="flex items-center justify-center"><FaLightbulb className="text-yellow-500 mr-2" /> Love creating & innovating</li>
            <li className="flex items-center justify-center"><FaMusic className="text-purple-500 mr-2" /> Passion for music & dance</li>
          </ul>
        </div>

        <p className="mt-6 text-gray-700">🚀 Open to new challenges & collaborations!</p>
      </div>
    </section>
  );
};

export default About;
