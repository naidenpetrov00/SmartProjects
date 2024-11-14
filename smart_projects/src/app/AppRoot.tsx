import { Outlet } from 'react-router-dom';

import { PageLayout } from '../components/layouts/PageLayout';

export const AppRoot = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};
