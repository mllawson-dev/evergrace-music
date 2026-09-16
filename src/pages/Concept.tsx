import { Link } from 'react-router-dom';
import lockup from '../assets/brand/evergrace-lockup.svg';
import genreWorship from '../assets/brand/genre-worship.svg';
import genreRock from '../assets/brand/genre-rock.svg';
import genreCountry from '../assets/brand/genre-country.svg';
import './Concept.css';

const divisions = [
  {
    name: 'Worship',
    description: 'A reflective expression built from the cross and shared wave language.',
    icon: genreWorship,
    className: 'worship',
  },
  {
    name: 'Rock',
    description: 'A more forceful expression using the lightning-pick mark and ember accent.',
    icon: genreRock,
    className: 'rock',
  },
  {
    name: 'Country',
    description: 'A roots-oriented expression using the guitar headstock and rust accent.',
    icon: genreCountry,
    className: 'country',
  },
];

const scope = [
  'Brand architecture and master identity',
  'Genre-specific sub-brand system',
  'Album artwork and artist presentation',
  'Responsive UX and interface design',
  'Reusable component and motion system',
  'Original demonstration audio and media player',
  'Press assets and brand documentation',
];

export function Concept() {
  return (
    <main className="eg-concept-page eg-grain-surface">
      <section className="eg-concept-hero">
        <div className="eg-concept-shell eg-concept-hero__grid">
          <div className="eg-concept-hero__copy">
            <p className="eg-concept-eyebrow">Self-initiated brand system</p>
            <h1>One label. Three musical worlds.</h1>
            <p className="eg-concept-hero__lead">
              Evergrace Music explores how one Christian music label could support worship, rock,
              and country artists without flattening the character of any one genre.
            </p>
          </div>
          <div className="eg-concept-hero__mark">
            <img src={lockup} alt="Evergrace Music — One faith. Every voice." />
          </div>
        </div>
      </section>

      <section className="eg-concept-section">
        <div className="eg-concept-shell eg-concept-split">
          <div>
            <p className="eg-concept-eyebrow">The challenge</p>
            <h2>Build cohesion without sameness.</h2>
          </div>
          <div className="eg-concept-prose">
            <p>
              The system needed a recognizable parent identity, enough flexibility for three very
              different audiences, and a digital experience that could make the full roster feel
              like one label.
            </p>
            <p>
              A shared wave motif, disciplined core palette, genre-specific symbols, and a common
              interface language create that balance across every touchpoint.
            </p>
          </div>
        </div>
      </section>

      <section className="eg-concept-section eg-concept-section--surface">
        <div className="eg-concept-shell">
          <header className="eg-concept-section__header">
            <p className="eg-concept-eyebrow">The system</p>
            <h2>Shared DNA. Distinct expressions.</h2>
          </header>
          <div className="eg-concept-divisions">
            {divisions.map((division) => (
              <article
                key={division.name}
                className={`eg-concept-division eg-concept-division--${division.className}`}
              >
                <img src={division.icon} alt="" />
                <div>
                  <h3>{division.name}</h3>
                  <p>{division.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="eg-concept-palette" aria-label="Evergrace color system">
            <span className="eg-concept-swatch eg-concept-swatch--gold">Warm gold</span>
            <span className="eg-concept-swatch eg-concept-swatch--charcoal">Charcoal</span>
            <span className="eg-concept-swatch eg-concept-swatch--worship">Worship purple</span>
            <span className="eg-concept-swatch eg-concept-swatch--rock">Rock ember</span>
            <span className="eg-concept-swatch eg-concept-swatch--country">Country rust</span>
          </div>
        </div>
      </section>

      <section className="eg-concept-section">
        <div className="eg-concept-shell eg-concept-scope">
          <div>
            <p className="eg-concept-eyebrow">Project scope</p>
            <h2>Identity carried through experience.</h2>
            <p className="eg-concept-scope__intro">
              The concept extends beyond the mark into artwork, content structure, interaction,
              responsive behavior, and production-ready brand assets.
            </p>
          </div>
          <ul className="eg-concept-scope__list">
            {scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="eg-concept-section eg-concept-disclosure">
        <div className="eg-concept-shell eg-concept-disclosure__inner">
          <div>
            <p className="eg-concept-eyebrow">Concept disclosure</p>
            <h2>Designed as a believable prototype.</h2>
          </div>
          <p>
            Evergrace Music is a self-initiated concept. The label, artists, biographies, releases,
            tour dates, contact details, streaming destinations, and commerce interactions are
            fictional and were created solely to demonstrate the brand and product system.
          </p>
        </div>
      </section>

      <nav className="eg-concept-shell eg-concept-actions" aria-label="Explore the concept">
        <Link to="/artists" className="eg-concept-action eg-concept-action--primary">
          Explore the roster
        </Link>
        <Link to="/press" className="eg-concept-action">
          View press assets
        </Link>
        <Link to="/style-guide" className="eg-concept-action">
          Open design system
        </Link>
      </nav>
    </main>
  );
}
