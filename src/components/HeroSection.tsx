
import React from 'react';
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-solar-blue/70 to-solar-green/60 z-10"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-solar-yellow text-gray-900 px-4 py-1 rounded-full mb-6 font-medium">
            April 14-18, 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">International Solar Energy Conference</h1>
          <p className="text-xl mb-8 max-w-2xl">Join thousands of solar professionals and researchers at the premier event for sustainable energy innovation and global climate solutions.</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-5 w-5" />
              <span>April 14-18, 2026</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span>Renewable City Conference Center</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-solar-yellow text-gray-900 hover:bg-yellow-400">
              Register Now
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              View Program
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
