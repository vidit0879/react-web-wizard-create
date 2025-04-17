
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpeakersSection from '@/components/SpeakersSection';
import ProgramSection from '@/components/ProgramSection';
import RegisterSection from '@/components/RegisterSection';
import SponsorsSection from '@/components/SponsorsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ProgramSection />
      <RegisterSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
