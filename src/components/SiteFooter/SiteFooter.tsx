import { Link } from 'react-router-dom';
import icon from '../../assets/brand/icon-gold.svg';
import './SiteFooter.css';

const YEAR = 2026;

export function SiteFooter() {
  return (
    <footer className="eg-footer">
      <div className="eg-footer__inner">
        <div className="eg-footer__top">
          <div className="eg-footer__brand">
            <Link to="/" className="eg-footer__brand-mark">
              <img src={icon} alt="" className="eg-footer__icon" />
              <span className="eg-footer__wordmark">Evergrace Music</span>
            </Link>
            <p className="eg-footer__tagline">One faith. Every voice.</p>
            <p className="eg-footer__concept">Self-initiated concept · fictional label and roster.</p>
          </div>

          <div className="eg-footer__col">
            <p className="eg-footer__col-heading">Explore</p>
            <ul className="eg-footer__col-links">
              <li>
                <Link to="/artists" className="eg-footer__link">
                  Roster
                </Link>
              </li>
              <li>
                <Link to="/artists?genre=worship" className="eg-footer__link eg-footer__link--worship">
                  Worship
                </Link>
              </li>
              <li>
                <Link to="/artists?genre=rock" className="eg-footer__link eg-footer__link--rock">
                  Rock
                </Link>
              </li>
              <li>
                <Link to="/artists?genre=country" className="eg-footer__link eg-footer__link--country">
                  Country
                </Link>
              </li>
              <li>
                <Link to="/tour" className="eg-footer__link">
                  Tour dates
                </Link>
              </li>
            </ul>
          </div>

          <div className="eg-footer__col">
            <p className="eg-footer__col-heading">Label</p>
            <ul className="eg-footer__col-links">
              <li>
                <Link to="/contact" className="eg-footer__link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/press" className="eg-footer__link">
                  Press kit
                </Link>
              </li>
              <li>
                <Link to="/careers" className="eg-footer__link">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="eg-footer__col">
            <p className="eg-footer__col-heading">Legal</p>
            <ul className="eg-footer__col-links">
              <li>
                <Link to="/privacy" className="eg-footer__link">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="eg-footer__link">
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="eg-footer__bottom">
          <p className="eg-footer__copyright">&copy; {YEAR} Evergrace Music concept.</p>
          <p className="eg-footer__made">Worship. Rock. Country. One faith.</p>
        </div>
      </div>
    </footer>
  );
}
