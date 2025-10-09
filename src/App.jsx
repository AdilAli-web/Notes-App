import React from 'react';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Paste from './components/Paste';
import Home from './components/Home';
import ViewPaste from './components/ViewPaste';

function App() {
  const routers = createBrowserRouter([
    { path: "/", element: <div><Navbar /> <Home /></div> },
    {
      path: "/paste", element: <div>
        <Navbar />
        <Paste />

      </div>
    },
    { path: "/home", element: <div><Navbar /> <Home /></div> },
    { path: "/Pastes/:id", element: <div> <Navbar /> <ViewPaste /></div> }

  ])
  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={routers} />

    </div>
  );
}

export default App;