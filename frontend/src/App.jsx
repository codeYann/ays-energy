import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './pages/home';
import Article from './pages/article';
import DashBoard from './pages/dashboard';
import LoginDashBoard from './components/login-dashboard';

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
    path: '/article',
    element: <Article />,
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
