
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>AGNI-S 2025</h3>
          <p>
            International Conference on Advances in Green, Net-Zero, Innovation - Sustainability.
            Join us for this premier gathering of industry professionals, researchers, and policymakers.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about/conference">About the Conference</Link></li>
            <li><Link to="/about/theme">Conference Theme</Link></li>
            <li><Link to="/speakers">Speakers</Link></li>
            <li><Link to="/event">Event</Link></li>
            <li><Link to="/about/dates">Important Dates</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <MapPin size={20} />
              <span>University Campus, Green City, 10001</span>
            </li>
            <li>
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <Mail size={20} />
              <span>info@agnis2025.org</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AGNI-S 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
