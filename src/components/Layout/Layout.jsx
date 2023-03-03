import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

const Layout = () => {
  const { id } = useParams();
  return (
    <>
      <header>{!id && <Navigation />}</header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
