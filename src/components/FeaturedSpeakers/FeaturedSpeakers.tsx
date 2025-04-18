
import "./FeaturedSpeakers.css";

const speakers = [
  {
    id: 1,
    name: "Dr. Eleanor Reynolds",
    title: "Chief Sustainability Officer, Green Tech Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    topic: "The Future of Sustainable Energy Systems"
  },
  {
    id: 2,
    name: "Prof. James Chen",
    title: "Director, Institute for Climate Research",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    topic: "Climate Modeling for Net-Zero Planning"
  },
  {
    id: 3,
    name: "Dr. Amara Okafor",
    title: "Lead Researcher, Renewable Energy Lab",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    topic: "Innovative Energy Storage Solutions"
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    title: "Senior Policy Advisor, International Climate Initiative",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    topic: "Policy Frameworks for Carbon Neutrality"
  }
];

const FeaturedSpeakers = () => {
  return (
    <section className="speakers-section">
      <div className="speakers-container">
        <div className="section-header">
          <h2>Featured Speakers</h2>
          <div className="separator"></div>
          <p className="section-description">
            Learn from world-renowned experts and thought leaders in sustainability and green innovation.
          </p>
        </div>
        
        <div className="speakers-grid">
          {speakers.map(speaker => (
            <div className="speaker-card" key={speaker.id}>
              <div className="speaker-image">
                <img src={speaker.image} alt={speaker.name} />
              </div>
              <div className="speaker-info">
                <h3>{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
                <p className="speaker-topic">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="speakers-cta">
          <a href="/speakers" className="view-all-button">
            View All Speakers
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
