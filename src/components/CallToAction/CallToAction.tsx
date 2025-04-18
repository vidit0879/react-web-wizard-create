
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="cta-container">
        <h2>Ready to be part of AGNI-S 2025?</h2>
        <p>Join leading researchers, industry experts, and policymakers to shape the future of sustainability.</p>
        <div className="cta-buttons">
          <a href="#registration" className="cta-button register">Register Now</a>
          <a href="#papers" className="cta-button submit">Submit a Paper</a>
        </div>
        <div className="cta-countdown">
          <div className="countdown-item">
            <div className="countdown-number">180</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">16</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">42</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">37</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
