
import React from 'react'
import Root from './Root/Root';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { ElectronicsProvider } from './Root/ProductProvider';

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
    ],
  },
]);

  return (
  <ElectronicsProvider>
    <RouterProvider router={router} />
  </ElectronicsProvider>
  )
}

export default App