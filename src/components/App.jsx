import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const AddPage = lazy(() => import('../page/AddPage/AddPage'));
const UsersPage = lazy(() => import('../page/UsersPage/UsersPage'));
const UserDetaailsPage = lazy(() =>
  import('../page/UserDetaailsPage/UserDetaailsPage')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetaailsPage />} />
        <Route path="/users/add" element={<AddPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

// Шановний Сашко, я додав Вас, як колаборанта, будь ласка підтвердіть та запуште потім. я мейн не захищав, тож повинно все бути ок
