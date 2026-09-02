import { Outlet } from 'react-router-dom';
import { SiteHeader } from '../SiteHeader/SiteHeader';
import { SiteFooter } from '../SiteFooter/SiteFooter';

export function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}
