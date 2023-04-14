import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from '@/app/routes/ProtectedRoute';
import { Home, Login, Registration } from '@/pages/index';

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
]);

export default router;
