import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import './index.css';
import Cart from './pages/Cart/Cart.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Shipping from './pages/Shipping/Shipping.jsx';
import Payment from './components/Payment/Payment.jsx';
import PlaceOrder from './components/PlaceOrder/PlaceOrder.jsx';
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'product/:id',
        element: <ProductDetail />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'shipping',
        element: (
          <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        ),
      },
      {
        path: 'payment',
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: 'placeorder',
        element: (
          <PrivateRoute>
            <PlaceOrder />
          </PrivateRoute>
        ),
      },
      {
        path: 'orderConfirmation',
        element: (
          <PrivateRoute>
            <ConfirmOrder />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
