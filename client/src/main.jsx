import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Reviews from './pages/Reviews.jsx';
import AcceptedPayments from './pages/AcceptedPayments.jsx';
import Contact from './pages/Contact.jsx';
import Signup from './pages/Signup.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FAQ from './pages/FAQ.jsx';
import About from './pages/About.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import CreateATicket from './components/CreateATicket.jsx';
import ViewYourTickets from './components/ViewYourTickets.jsx';
import TerminalNews from './components/TerminalNews.jsx';
import Admin from './components/Admin.jsx';

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
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/reviews',
        element: < Reviews />
      },
      {
        path: '/accepted-payment',
        element: < AcceptedPayments />
      },
      {
        path: '/contact',
        element: < Contact />
      },
      {
        path: '/FAQ',
        element: < FAQ />
      },
      {
        path: '/about',
        element: < About />
      },
      {
        path: '/create-a-ticket',
        element: <CreateATicket />
      },
      {
        path: '/view-your-tickets',
        element: <ViewYourTickets />
      },
      {
        path: '/privacy-policy',
        element: < PrivacyPolicy />
      },
      {
        path: '/terminal-news',
        element: < TerminalNews />
      },
      {
        path: '/admin',
        element: <Admin />
      }

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
