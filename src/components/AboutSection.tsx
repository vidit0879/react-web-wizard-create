
import React from 'react';
import { Calendar, Users, Map, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About the Conference</h2>
          <div className="w-24 h-1 bg-solar-blue mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            The International Solar Energy Conference brings together industry leaders, researchers, 
            policymakers and innovators to discuss the latest advancements in solar technology 
            and accelerate the global transition to renewable energy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              The conference aims to accelerate the global transition to sustainable energy by fostering 
              collaboration between industry, academia, and government sectors. We provide a platform for 
              sharing cutting-edge research, best practices, and policies that drive the adoption of solar 
              energy solutions worldwide.
            </p>
            <p className="text-gray-600">
              Through presentations, workshops, and networking opportunities, we empower participants 
              to develop partnerships and strategies that address climate challenges, energy access, 
              and technological innovation in the solar industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Calendar className="w-10 h-10 text-solar-blue mb-4" />
              <h4 className="text-lg font-semibold mb-2">5 Days</h4>
              <p className="text-gray-600">Of keynotes, workshops, and networking sessions</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-10 h-10 text-solar-green mb-4" />
              <h4 className="text-lg font-semibold mb-2">2000+ Attendees</h4>
              <p className="text-gray-600">From 75+ countries worldwide</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Map className="w-10 h-10 text-solar-blue mb-4" />
              <h4 className="text-lg font-semibold mb-2">120+ Exhibitors</h4>
              <p className="text-gray-600">Showcasing the latest solar technologies</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Sparkles className="w-10 h-10 text-solar-green mb-4" />
              <h4 className="text-lg font-semibold mb-2">50+ Speakers</h4>
              <p className="text-gray-600">Industry leaders and innovators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
