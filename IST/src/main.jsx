

import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Privacypolicy from './components/Privacypolicy.jsx';
import TermsAndConditions from './components/TermsAndConditions.jsx';
import About from './components/About.jsx';
import Faq from './components/Faq.jsx';
import Testimonialsection from './components/Testimonialsection.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import GiftTherapy from './components/GiftTherapy.jsx';
import ContactPage from './components/ContactPage.jsx';
import BlogSection from './components/BlogSection.jsx';
import MainLayout from './components/MainLayout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Use MainLayout as the wrapper
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/testi", element: <Testimonialsection /> },
      { path: "/services", element: <Services /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/gift", element: <GiftTherapy /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/blog", element: <BlogSection /> },
    ],
  },
  { path: "/privacy", element:<>
    <ScrollToTop />
    <Privacypolicy />
  </> },
  { path: "/terms-of-service", element: <>
    <ScrollToTop />
    <TermsAndConditions />
  </> },
  { path: "/faq", element: <>
    <ScrollToTop />
    <Faq />
  </> },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);