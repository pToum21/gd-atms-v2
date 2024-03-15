import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Reviews from './pages/Reviews.jsx';  
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// this establishes pages component structure and their paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    // children components and paths that will be injected into Outlet
    children: [
      {
        // this index: true means home will be the default path that matches App.jsx, other children objects should not have index:true.
        index: true,
        element: <Home />
      },
      {
        path: '/reviews',
        element: < Reviews/>
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
