
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-solar-blue text-2xl font-bold">Solar Conference</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-solar-blue font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-solar-blue font-medium">About</Link>
          <Link to="/program" className="text-gray-700 hover:text-solar-blue font-medium">Program</Link>
          <Link to="/speakers" className="text-gray-700 hover:text-solar-blue font-medium">Speakers</Link>
          <Link to="/venue" className="text-gray-700 hover:text-solar-blue font-medium">Venue</Link>
          <Link to="/contact" className="text-gray-700 hover:text-solar-blue font-medium">Contact</Link>
          <Button className="bg-solar-blue hover:bg-blue-700 text-white">Register Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-solar-blue font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-solar-blue font-medium" onClick={toggleMenu}>About</Link>
            <Link to="/program" className="text-gray-700 hover:text-solar-blue font-medium" onClick={toggleMenu}>Program</Link>
            <Link to="/speakers" className="text-gray-700 hover:text-solar-blue font-medium" onClick={toggleMenu}>Speakers</Link>
            <Link to="/venue" className="text-gray-700 hover:text-solar-blue font-medium" onClick={toggleMenu}>Venue</Link>
            <Link to="/contact" className="text-gray-700 hover:text-solar-blue font-medium" onClick={toggleMenu}>Contact</Link>
            <Button className="bg-solar-blue hover:bg-blue-700 text-white w-full">Register Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
