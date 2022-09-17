import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import ErrorPage from './routes/Error';
import BinPage from './routes/Bin';
import Root from './routes/Root';
import Home from './routes/Home';
import AllBins from './routes/Bins';
import Request from './routes/Request';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/binpage/:userId',
        element: <AllBins />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/binpage/:userId/:binId',
        element: <BinPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/metadata/:binId/:requestId',
        element: <Request />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
