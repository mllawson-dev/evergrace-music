import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout/SiteLayout';
import { Home } from './pages/Home';
import { ArtistPage } from './pages/ArtistPage';
import { Roster } from './pages/Roster';
import { Tour } from './pages/Tour';
import { StyleGuide } from './pages/StyleGuide';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Roster />} />
        <Route path="/artists/:artistId" element={<ArtistPage />} />
        <Route path="/tour" element={<Tour />} />
      </Route>
      {/* Style guide intentionally sits outside SiteLayout — unlinked dev documentation, not part of the public site nav */}
      <Route path="/style-guide" element={<StyleGuide />} />
    </Routes>
  );
}

export default App;
