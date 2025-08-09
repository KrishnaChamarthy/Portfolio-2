import React from 'react';
import { Download } from 'lucide-react';
import { contactMethods, socialLinks } from '../constants/constants';
import resumePdf from '../assets/KC_Resume.pdf';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-black/20" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and interesting projects. Let's connect!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a 
                key={index} 
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm hover:border-purple-500/50 hover:bg-purple-900/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{contact.label}</h3>
                <p className="text-gray-300 text-sm">{contact.value}</p>
              </a>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(resumePdf, '_blank')}
          >
            <Download className="w-5 h-5" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
