import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const UsersPage = lazy(() => import('../page/UsersPage/UsersPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};
