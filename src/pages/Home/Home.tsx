
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import FeaturedSpeakers from "../../components/FeaturedSpeakers/FeaturedSpeakers";
import EventHighlights from "../../components/EventHighlights/EventHighlights";
import CallToAction from "../../components/CallToAction/CallToAction";
import Sponsors from "../../components/Sponsors/Sponsors";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero 
        title="AGNI-S 2025"
        subtitle="International Conference on Advances in Green, Net-Zero, Innovation - Sustainability"
        date="May 15-18, 2025"
        location="University Campus, Green City"
      />
      <About />
      <FeaturedSpeakers />
      <EventHighlights />
      <CallToAction />
      <Sponsors />
    </div>
  );
};

export default Home;
