
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Solar Conference</h3>
            <p className="text-gray-300 mb-4">
              Join us for the premier gathering of solar industry professionals, researchers, 
              and policymakers to discuss the latest advances in solar energy technology and implementation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-solar-yellow" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-solar-yellow" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-solar-yellow" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-solar-yellow" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About the Conference</Link></li>
              <li><Link to="/program" className="text-gray-300 hover:text-white">Program</Link></li>
              <li><Link to="/speakers" className="text-gray-300 hover:text-white">Speakers</Link></li>
              <li><Link to="/venue" className="text-gray-300 hover:text-white">Venue</Link></li>
              <li><Link to="/registration" className="text-gray-300 hover:text-white">Registration</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Solar Avenue, Renewable City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-gray-300">info@solarconference.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Solar Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
