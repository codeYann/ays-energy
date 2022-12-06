import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './pages/home';
import DashBoard from './pages/dashboard';
import LoginDashBoard from './components/login-dashboard';
import CreateArticle from './pages/createArticles';
import ListArticles from './pages/listArticles';
import RemoveArticles from './pages/removeArticles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginDashBoard />,
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
  },
  {
    path: '/dashboard/create',
    element: <CreateArticle />,
  },
  {
    path: '/dashboard/list',
    element: <ListArticles />,
  },
  {
    path: '/dashboard/remove',
    element: <RemoveArticles />,
  },
]);

function App() {
  return (
    <div>
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
