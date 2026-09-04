import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout/SiteLayout';
import { Home } from './pages/Home';
import { ArtistPage } from './pages/ArtistPage';
import { Roster } from './pages/Roster';
import { Tour } from './pages/Tour';
import { Contact } from './pages/Contact';
import { Press } from './pages/Press';
import { Careers } from './pages/Careers';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { StyleGuide } from './pages/StyleGuide';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Roster />} />
        <Route path="/artists/:artistId" element={<ArtistPage />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
      {/* Style guide intentionally sits outside SiteLayout — unlinked dev documentation, not part of the public site nav */}
      <Route path="/style-guide" element={<StyleGuide />} />
    </Routes>
  );
}

export default App;
