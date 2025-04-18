
import "./Sponsors.css";

// Example sponsor logos
const sponsors = {
  platinum: [
    { id: 1, name: "EcoTech Solutions", logo: "https://via.placeholder.com/200x100?text=EcoTech" },
    { id: 2, name: "Green Energy Corp", logo: "https://via.placeholder.com/200x100?text=GreenEnergy" },
  ],
  gold: [
    { id: 3, name: "Sustainable Future", logo: "https://via.placeholder.com/180x90?text=SustainableFuture" },
    { id: 4, name: "EcoInnovate", logo: "https://via.placeholder.com/180x90?text=EcoInnovate" },
    { id: 5, name: "CleanTech Industries", logo: "https://via.placeholder.com/180x90?text=CleanTech" },
  ],
  silver: [
    { id: 6, name: "GreenStart", logo: "https://via.placeholder.com/150x75?text=GreenStart" },
    { id: 7, name: "EcoSystems", logo: "https://via.placeholder.com/150x75?text=EcoSystems" },
    { id: 8, name: "RenewPower", logo: "https://via.placeholder.com/150x75?text=RenewPower" },
    { id: 9, name: "SustainTech", logo: "https://via.placeholder.com/150x75?text=SustainTech" },
  ],
};

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        <div className="section-header">
          <h2>Our Sponsors</h2>
          <div className="separator"></div>
          <p className="section-description">
            AGNI-S 2025 is proudly supported by leading organizations committed to advancing sustainability.
          </p>
        </div>
        
        <div className="sponsors-categories">
          <div className="sponsor-category">
            <h3>Platinum Sponsors</h3>
            <div className="sponsor-logos platinum">
              {sponsors.platinum.map(sponsor => (
                <div className="sponsor-logo" key={sponsor.id}>
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="sponsor-category">
            <h3>Gold Sponsors</h3>
            <div className="sponsor-logos gold">
              {sponsors.gold.map(sponsor => (
                <div className="sponsor-logo" key={sponsor.id}>
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="sponsor-category">
            <h3>Silver Sponsors</h3>
            <div className="sponsor-logos silver">
              {sponsors.silver.map(sponsor => (
                <div className="sponsor-logo" key={sponsor.id}>
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="become-sponsor">
          <h3>Interested in becoming a sponsor?</h3>
          <p>Gain visibility and connect with key stakeholders in the sustainability sector.</p>
          <a href="/sponsorship" className="sponsor-cta">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
