
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Early Bird",
    price: 299,
    features: [
      "Full conference access",
      "Access to all sessions",
      "Conference materials",
      "Welcome reception",
      "Coffee breaks and lunches",
      "Certificate of participation"
    ],
    popular: false,
    ctaText: "Register Now"
  },
  {
    name: "Standard",
    price: 499,
    features: [
      "Everything in Early Bird",
      "Gala dinner access",
      "Workshop participation",
      "Exclusive networking events",
      "1-year digital resources access",
      "Conference recording access"
    ],
    popular: true,
    ctaText: "Register Now"
  },
  {
    name: "Premium",
    price: 899,
    features: [
      "Everything in Standard",
      "VIP seating at keynotes",
      "Private meeting with speakers",
      "Exclusive industry tour",
      "Special recognition",
      "Lifetime digital resources access"
    ],
    popular: false,
    ctaText: "Register Now"
  }
];

const RegisterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-solar-blue/10 to-solar-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Registration Options</h2>
          <div className="w-24 h-1 bg-solar-blue mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Choose the registration package that suits your needs and secure your spot at the Solar Conference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative ${
                plan.popular ? 'ring-2 ring-solar-blue' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-solar-blue text-white text-sm font-semibold py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-solar-blue mb-6">
                  ${plan.price}
                  <span className="text-base font-normal text-gray-600"> / person</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-solar-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${
                  plan.popular ? 'bg-solar-blue hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'
                } text-white`}>
                  {plan.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6">
            Group discounts available for 5+ registrations. Contact us for academic and student pricing options.
          </p>
          <Button variant="outline" className="border-solar-blue text-solar-blue hover:bg-solar-blue hover:text-white">
            Contact Us for Group Rates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
