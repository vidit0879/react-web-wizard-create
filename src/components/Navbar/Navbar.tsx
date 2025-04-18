
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

// Placeholder logos - replace with actual logos
const leftLogo = "/images/left-logo.png";
const rightLogo = "/images/right-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [awardsDropdown, setAwardsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setAboutDropdown(false);
      setAwardsDropdown(false);
    }
  };

  const toggleAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown);
    if (awardsDropdown) setAwardsDropdown(false);
  };

  const toggleAwardsDropdown = () => {
    setAwardsDropdown(!awardsDropdown);
    if (aboutDropdown) setAboutDropdown(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setAboutDropdown(false);
    setAwardsDropdown(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo left">
          <Link to="/">
            <img src={leftLogo} alt="AGNI-S 2025 Left Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>

          <div className="dropdown">
            <button className="dropdown-trigger" onClick={toggleAboutDropdown}>
              About
              <span className="dropdown-icon">{aboutDropdown ? "▲" : "▼"}</span>
            </button>
            <div className={`dropdown-menu ${aboutDropdown ? "show" : ""}`}>
              <NavLink to="/about/college" onClick={closeMenu}>About the College</NavLink>
              <NavLink to="/about/department" onClick={closeMenu}>About the Department</NavLink>
              <NavLink to="/about/conference" onClick={closeMenu}>About the Conference</NavLink>
              <NavLink to="/about/theme" onClick={closeMenu}>Conference Theme</NavLink>
              <NavLink to="/about/committee" onClick={closeMenu}>Organizing Committee</NavLink>
              <NavLink to="/about/dates" onClick={closeMenu}>Important Dates</NavLink>
              <NavLink to="/about/attractions" onClick={closeMenu}>Tourist Attraction</NavLink>
            </div>
          </div>

          <NavLink to="/speakers" className={({ isActive }) => isActive ? "active" : ""}>
            Speakers
          </NavLink>

          <div className="dropdown">
            <button className="dropdown-trigger" onClick={toggleAwardsDropdown}>
              Awards
              <span className="dropdown-icon">{awardsDropdown ? "▲" : "▼"}</span>
            </button>
            <div className={`dropdown-menu ${awardsDropdown ? "show" : ""}`}>
              <NavLink to="/awards/paper" onClick={closeMenu}>Best Paper Award</NavLink>
              <NavLink to="/awards/poster" onClick={closeMenu}>Best Poster Award</NavLink>
            </div>
          </div>

          <NavLink to="/event" className={({ isActive }) => isActive ? "active" : ""}>
            Event
          </NavLink>

          <NavLink to="/sponsorship" className={({ isActive }) => isActive ? "active" : ""}>
            Sponsorship
          </NavLink>

          <NavLink to="/publications" className={({ isActive }) => isActive ? "active" : ""}>
            Publications
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </div>

        <div className="navbar-logo right">
          <Link to="/">
            <img src={rightLogo} alt="AGNI-S 2025 Right Logo" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          
          <div className="mobile-dropdown">
            <button className="mobile-dropdown-trigger" onClick={toggleAboutDropdown}>
              About
              <span className="dropdown-icon">{aboutDropdown ? "▲" : "▼"}</span>
            </button>
            {aboutDropdown && (
              <div className="mobile-dropdown-menu">
                <NavLink to="/about/college" onClick={closeMenu}>About the College</NavLink>
                <NavLink to="/about/department" onClick={closeMenu}>About the Department</NavLink>
                <NavLink to="/about/conference" onClick={closeMenu}>About the Conference</NavLink>
                <NavLink to="/about/theme" onClick={closeMenu}>Conference Theme</NavLink>
                <NavLink to="/about/committee" onClick={closeMenu}>Organizing Committee</NavLink>
                <NavLink to="/about/dates" onClick={closeMenu}>Important Dates</NavLink>
                <NavLink to="/about/attractions" onClick={closeMenu}>Tourist Attraction</NavLink>
              </div>
            )}
          </div>
          
          <NavLink to="/speakers" onClick={closeMenu}>Speakers</NavLink>
          
          <div className="mobile-dropdown">
            <button className="mobile-dropdown-trigger" onClick={toggleAwardsDropdown}>
              Awards
              <span className="dropdown-icon">{awardsDropdown ? "▲" : "▼"}</span>
            </button>
            {awardsDropdown && (
              <div className="mobile-dropdown-menu">
                <NavLink to="/awards/paper" onClick={closeMenu}>Best Paper Award</NavLink>
                <NavLink to="/awards/poster" onClick={closeMenu}>Best Poster Award</NavLink>
              </div>
            )}
          </div>
          
          <NavLink to="/event" onClick={closeMenu}>Event</NavLink>
          <NavLink to="/sponsorship" onClick={closeMenu}>Sponsorship</NavLink>
          <NavLink to="/publications" onClick={closeMenu}>Publications</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
