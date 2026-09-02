import { Outlet } from 'react-router-dom';
import { SiteHeader } from '../SiteHeader/SiteHeader';

export function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  );
}
