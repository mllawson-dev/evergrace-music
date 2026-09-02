import { NavLink } from 'react-router-dom';
import icon from '../../assets/brand/icon-gold.svg';
import './SiteHeader.css';

export function SiteHeader() {
  return (
    <header className="eg-site-header">
      <NavLink to="/" className="eg-site-header__brand" end>
        <img src={icon} alt="Evergrace Music" className="eg-site-header__icon" />
        <span>Evergrace Music</span>
      </NavLink>
      <nav className="eg-site-header__nav">
        <NavLink
          to="/artists"
          className={({ isActive }) => `eg-site-header__link ${isActive ? 'eg-site-header__link--active' : ''}`}
        >
          Roster
        </NavLink>
        <NavLink
          to="/tour"
          className={({ isActive }) => `eg-site-header__link ${isActive ? 'eg-site-header__link--active' : ''}`}
        >
          Tour
        </NavLink>
      </nav>
    </header>
  );
}
