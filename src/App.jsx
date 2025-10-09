import React from 'react';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import Paste from './components/Paste';
import Home from './components/Home';
import ViewPaste from './components/ViewPaste';
import { AnimatePresence, motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <PageWrapper>
          <Navbar />
          <Home />
        </PageWrapper>
      ),
    },
    {
      path: "/paste",
      element: (
        <PageWrapper>
          <Navbar />
          <Paste />
        </PageWrapper>
      ),
    },
    {
      path: "/Pastes/:id",
      element: (
        <PageWrapper>
          <Navbar />
          <ViewPaste />
        </PageWrapper>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
