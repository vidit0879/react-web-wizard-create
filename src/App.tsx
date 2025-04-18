
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

// Pages
import Home from "./pages/Home/Home";
import AboutCollege from "./pages/About/AboutCollege";
import AboutDepartment from "./pages/About/AboutDepartment";
import AboutConference from "./pages/About/AboutConference";
import ConferenceTheme from "./pages/About/ConferenceTheme";
import OrganizingCommittee from "./pages/About/OrganizingCommittee";
import ImportantDates from "./pages/About/ImportantDates";
import TouristAttraction from "./pages/About/TouristAttraction";
import Speakers from "./pages/Speakers/Speakers";
import BestPaperAward from "./pages/Awards/BestPaperAward";
import BestPosterAward from "./pages/Awards/BestPosterAward";
import Event from "./pages/Event/Event";
import Sponsorship from "./pages/Sponsorship/Sponsorship";
import Publications from "./pages/Publications/Publications";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about">
            <Route path="college" element={<AboutCollege />} />
            <Route path="department" element={<AboutDepartment />} />
            <Route path="conference" element={<AboutConference />} />
            <Route path="theme" element={<ConferenceTheme />} />
            <Route path="committee" element={<OrganizingCommittee />} />
            <Route path="dates" element={<ImportantDates />} />
            <Route path="attractions" element={<TouristAttraction />} />
          </Route>
          <Route path="speakers" element={<Speakers />} />
          <Route path="awards">
            <Route path="paper" element={<BestPaperAward />} />
            <Route path="poster" element={<BestPosterAward />} />
          </Route>
          <Route path="event" element={<Event />} />
          <Route path="sponsorship" element={<Sponsorship />} />
          <Route path="publications" element={<Publications />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
