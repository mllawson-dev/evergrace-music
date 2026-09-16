import { Outlet } from 'react-router-dom';
import { ConceptBar } from '../ConceptBar/ConceptBar';
import { SiteHeader } from '../SiteHeader/SiteHeader';
import { SiteFooter } from '../SiteFooter/SiteFooter';

export function SiteLayout() {
  return (
    <>
      <a className="eg-skip-link" href="#main-content">
        Skip to main content
      </a>
      <ConceptBar />
      <SiteHeader />
      <div id="main-content" tabIndex={-1}>
        <Outlet />
      </div>
      <SiteFooter />
    </>
  );
}
