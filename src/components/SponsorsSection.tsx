
import React from 'react';

const sponsors = {
  platinum: [
    { name: "SolarTech Inc", logo: "https://via.placeholder.com/200x80?text=SolarTech" },
    { name: "RenewCorp", logo: "https://via.placeholder.com/200x80?text=RenewCorp" },
  ],
  gold: [
    { name: "SunPower Solutions", logo: "https://via.placeholder.com/180x70?text=SunPower" },
    { name: "GreenEnergy Labs", logo: "https://via.placeholder.com/180x70?text=GreenEnergy" },
    { name: "SolarGrid", logo: "https://via.placeholder.com/180x70?text=SolarGrid" },
  ],
  silver: [
    { name: "PVTech", logo: "https://via.placeholder.com/150x60?text=PVTech" },
    { name: "SolarInnovate", logo: "https://via.placeholder.com/150x60?text=SolarInnovate" },
    { name: "EcoSystems", logo: "https://via.placeholder.com/150x60?text=EcoSystems" },
    { name: "BrightSun", logo: "https://via.placeholder.com/150x60?text=BrightSun" },
  ]
};

const SponsorsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Sponsors</h2>
          <div className="w-24 h-1 bg-solar-green mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We thank our generous sponsors for making this conference possible
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-solar-blue">Platinum Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {sponsors.platinum.map((sponsor, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <img src={sponsor.logo} alt={sponsor.name} className="h-20" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-solar-green">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <img src={sponsor.logo} alt={sponsor.name} className="h-16" />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-center mb-8 text-solar-yellow">Silver Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.silver.map((sponsor, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <img src={sponsor.logo} alt={sponsor.name} className="h-12" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-transparent hover:bg-solar-blue text-solar-blue hover:text-white border border-solar-blue font-medium py-2 px-6 rounded-md transition-colors duration-300">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
