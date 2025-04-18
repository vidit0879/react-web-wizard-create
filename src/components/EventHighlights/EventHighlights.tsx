
import "./EventHighlights.css";

const highlights = [
  {
    id: 1,
    title: "Keynote Sessions",
    description: "Inspirational talks from leaders in sustainability and green innovation.",
    icon: "🎤"
  },
  {
    id: 2,
    title: "Research Presentations",
    description: "The latest academic findings and technological advancements.",
    icon: "📝"
  },
  {
    id: 3,
    title: "Panel Discussions",
    description: "Engaging debates on pressing issues in sustainability.",
    icon: "💬"
  },
  {
    id: 4,
    title: "Networking",
    description: "Connect with experts and peers from various sectors.",
    icon: "🔗"
  },
  {
    id: 5,
    title: "Workshops",
    description: "Hands-on sessions to develop practical skills.",
    icon: "🧰"
  },
  {
    id: 6,
    title: "Innovation Showcase",
    description: "Exhibitions featuring cutting-edge sustainable technologies.",
    icon: "💡"
  }
];

const EventHighlights = () => {
  return (
    <section className="highlights-section">
      <div className="highlights-container">
        <div className="section-header">
          <h2>Event Highlights</h2>
          <div className="separator"></div>
          <p className="section-description">
            AGNI-S 2025 offers a diverse program designed to inspire, educate, and connect participants.
          </p>
        </div>
        
        <div className="highlights-grid">
          {highlights.map(item => (
            <div className="highlight-card" key={item.id}>
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="highlights-cta">
          <a href="/event" className="program-button">View Full Program</a>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
