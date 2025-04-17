
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-solar-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Solar Revolution?</h2>
          <p className="text-xl mb-10 opacity-90">
            Register today and be part of the world's premier solar energy conference. 
            Connect with industry leaders, discover cutting-edge technologies, and 
            help shape the future of sustainable energy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-solar-yellow text-gray-900 hover:bg-yellow-400">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
