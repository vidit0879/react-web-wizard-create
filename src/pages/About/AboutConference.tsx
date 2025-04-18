
import { Calendar, Users, MapPin } from "lucide-react";
import "./About.css";

const AboutConference = () => {
  return (
    <div className="page-container">
      <div className="page-hero conference-hero">
        <div className="page-hero-content">
          <h1>About the Conference</h1>
        </div>
      </div>

      <div className="content-container">
        <section className="about-section">
          <h2>AGNI-S 2025</h2>
          <div className="section-separator"></div>
          
          <p className="section-intro">
            The International Conference on Advances in Green, Net-Zero, Innovation - Sustainability (AGNI-S) 
            is a premier gathering of researchers, industry leaders, policymakers, and innovators dedicated to 
            accelerating the transition towards a sustainable, net-zero future.
          </p>
          
          <div className="conference-details">
            <div className="detail-item">
              <Calendar className="detail-icon" />
              <div>
                <h3>Event Date</h3>
                <p>May 15-18, 2025</p>
              </div>
            </div>
            <div className="detail-item">
              <MapPin className="detail-icon" />
              <div>
                <h3>Location</h3>
                <p>University Campus, Green City</p>
              </div>
            </div>
            <div className="detail-item">
              <Users className="detail-icon" />
              <div>
                <h3>Participants</h3>
                <p>Over 1,000 attendees from 25+ countries</p>
              </div>
            </div>
          </div>
          
          <h2 className="mt-large">Our Vision & Mission</h2>
          <div className="section-separator"></div>
          
          <div className="text-content">
            <p>
              AGNI-S 2025 aims to be a catalyst for transformative change in how we approach environmental 
              sustainability, net-zero emissions goals, and green innovation. Our conference serves as a platform 
              for knowledge exchange, collaboration, and the development of actionable strategies to address the 
              most pressing environmental challenges of our time.
            </p>
            
            <p>
              Through a diverse program of keynote presentations, panel discussions, research presentations, 
              workshops, and networking events, we seek to:
            </p>
            
            <ul className="bullet-list">
              <li>Facilitate the exchange of cutting-edge research and innovations in sustainability</li>
              <li>Foster collaboration between academia, industry, government, and civil society</li>
              <li>Accelerate the development and implementation of solutions for achieving net-zero emissions</li>
              <li>Provide a platform for emerging researchers and startups to showcase their work</li>
              <li>Influence policy development and corporate strategies in favor of sustainable practices</li>
            </ul>
          </div>
          
          <h2 className="mt-large">Conference History</h2>
          <div className="section-separator"></div>
          
          <div className="text-content">
            <p>
              Since its inception in 2018, AGNI-S has grown to become one of the most respected forums for 
              sustainability and green innovation. What began as a small academic gathering has evolved into 
              a comprehensive international conference attracting participants from various sectors and disciplines.
            </p>
            
            <p>
              Previous editions of AGNI-S have been held in major cities across the globe, including Tokyo (2018), 
              Berlin (2019), Toronto (2021), and Singapore (2023). Each conference has built upon the success of 
              previous events, expanding both in scope and impact.
            </p>
            
            <p>
              AGNI-S 2025 represents our most ambitious event yet, with a renewed focus on practical solutions for 
              achieving global net-zero targets and advancing the frontier of sustainable innovation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutConference;
