
import React from 'react'
import Root from './Root/Root';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { ElectronicsProvider } from './Root/ProductProvider';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "cart", Component: Cart },
      { path: "product/:id", Component: ProductDetails },
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