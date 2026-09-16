import iconGold from '../assets/brand/icon-gold.svg';
import './Press.css';

const DOWNLOADS = [
  { label: 'Primary logo — PNG', href: '/brand/evergrace-primary-full-color.png' },
  { label: 'Primary logo — SVG', href: '/brand/evergrace-primary-full-color.svg' },
  { label: 'Icon mark — PNG', href: '/brand/evergrace-icon-gold.png' },
  { label: 'Icon mark — SVG', href: '/brand/evergrace-icon-gold.svg' },
  { label: 'Logo, dark background — PNG', href: '/brand/evergrace-primary-dark-background.png' },
];

export function Press() {
  return (
    <main className="eg-press-page">
      <h1 className="eg-press-page__heading">Press kit</h1>
      <p className="eg-press-page__note">Boilerplate, brand assets, and a media contact.</p>

      <section className="eg-press-page__section">
        <h2>About Evergrace Music</h2>
        <p>
          Evergrace Music is a Christian music label home to worship, rock, and country artists
          united by one conviction: One faith. Every voice. The roster spans front-porch hymns to
          arena-sized riffs, released under a single label built to make room for all of it.
        </p>
      </section>

      <section className="eg-press-page__section">
        <h2>Brand assets</h2>
        <p className="eg-press-page__section-note">
          For editorial and press use. Please don&rsquo;t alter the logo&rsquo;s colors or proportions.
        </p>
        <ul className="eg-press-page__downloads">
          {DOWNLOADS.map((item) => (
            <li key={item.href}>
              <a href={item.href} download className="eg-press-page__download-link">
                <img src={iconGold} alt="" className="eg-press-page__download-icon" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="eg-press-page__section">
        <h2>Media contact</h2>
        <p>
          Demonstration contact: <span className="eg-press-page__concept-contact">press@evergracemusic.com</span>{' '}
          <small>(concept only)</small>.
        </p>
      </section>
    </main>
  );
}
