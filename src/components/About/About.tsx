
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2>About AGNI-S 2025</h2>
          <div className="separator"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Leading the Path to a Sustainable Future</h3>
            <p>
              The International Conference on Advances in Green, Net-Zero, Innovation - Sustainability (AGNI-S) brings together industry leaders, researchers, policymakers, and innovators to discuss the latest advancements in sustainable technologies and practices.
            </p>
            <p>
              This prestigious gathering aims to accelerate the global transition to net-zero emissions by fostering collaboration between academia, industry, and government sectors, providing a platform for sharing cutting-edge research, best practices, and policies.
            </p>
            <a href="/about/conference" className="read-more">Learn More</a>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Days of Innovation</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Speakers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Represented</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Research Presentations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
