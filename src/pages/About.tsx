
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Image Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2076&auto=format&fit=crop"
          alt="Solar panels under blue sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About Solar World Congress
          </h1>
        </div>
      </div>

      {/* First About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Vision & Mission
            </h2>
            <div className="w-24 h-1 bg-solar-blue mb-8"></div>
            <p className="text-lg text-gray-600 mb-6">
              The International Solar World Congress stands as a beacon of innovation and collaboration 
              in the global solar energy sector. Our mission is to accelerate the worldwide transition 
              to sustainable energy by bringing together the brightest minds and most innovative 
              technologies in solar power.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe that by fostering collaboration between industry leaders, researchers, 
              and policymakers, we can overcome the challenges facing solar energy adoption 
              and create a more sustainable future for generations to come.
            </p>
            <Button className="bg-solar-blue hover:bg-blue-700">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Second About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Impact & Legacy
            </h2>
            <div className="w-24 h-1 bg-solar-green mb-8"></div>
            <p className="text-lg text-gray-600 mb-6">
              Since our inception, the Solar World Congress has been at the forefront of solar 
              energy innovation and policy development. Our annual gatherings have led to 
              groundbreaking partnerships, technological breakthroughs, and meaningful 
              policy changes across the globe.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Through our network of industry leaders, researchers, and advocates, we've 
              helped facilitate the implementation of solar energy solutions in communities 
              worldwide, making clean energy more accessible and affordable for all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-solar-blue mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-solar-green mb-2">50K+</div>
                <div className="text-gray-600">Global Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-solar-blue mb-2">100+</div>
                <div className="text-gray-600">Partner Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
