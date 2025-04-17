
import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const speakers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Solar Physics Research Lead, MIT",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    bio: "Leading researcher in photovoltaic materials and solar efficiency optimization.",
    twitter: "#",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, SolarTech Industries",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    bio: "Pioneer in commercial solar installation and sustainable business practices.",
    twitter: "#",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Dr. Amara Osei",
    role: "Director, Global Solar Initiative",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    bio: "Leading policy expert on renewable energy implementation in developing nations.",
    twitter: "#",
    linkedin: "#"
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    role: "CTO, NextGen Solar Storage",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    bio: "Innovator in solar energy storage systems and grid integration technologies.",
    twitter: "#",
    linkedin: "#"
  }
];

const SpeakersSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Speakers</h2>
          <div className="w-24 h-1 bg-solar-green mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Learn from the world's top solar energy experts, innovators, and thought leaders
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">{speaker.name}</h3>
                <p className="text-solar-blue font-medium mb-3">{speaker.role}</p>
                <p className="text-gray-600 mb-4">{speaker.bio}</p>
                <div className="flex space-x-3">
                  <a href={speaker.twitter} className="text-gray-500 hover:text-solar-blue transition-colors" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href={speaker.linkedin} className="text-gray-500 hover:text-solar-blue transition-colors" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-transparent hover:bg-solar-blue text-solar-blue hover:text-white border border-solar-blue font-medium py-2 px-6 rounded-md transition-colors duration-300">
            View All Speakers
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
