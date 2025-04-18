
import "./Hero.css";

interface HeroProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
}

const Hero = ({ title, subtitle, date, location }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="hero-details">
          <p className="hero-date">{date}</p>
          <p className="hero-location">{location}</p>
        </div>
        <div className="hero-buttons">
          <a href="#register" className="primary-button">Register Now</a>
          <a href="#program" className="secondary-button">View Program</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
