import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/home.tsx'
import About from './pages/About/About.tsx'
import Product from './pages/Product/Product.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import CartPage from './pages/Cart/Cart.tsx'
import CheckoutPage from './pages/Checkout/Checkout.tsx'
import SuccessPage from './pages/success/Success.tsx'
import ManageProductsPage from './pages/ManageProduct/ManageProduct.tsx'
import SingleProduct from './myComponents/SingleProduct/SingleProduct.tsx'
import CategorySingle from './pages/CategorySingle/CategorySingle.tsx'
import ErrorPage from './pages/NotFound/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'products',
        element: <Product />
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'checkout',
        element: <CheckoutPage />
      },
      {
        path: 'success',
        element: <SuccessPage />
      },
      {
        path: "manage-products",
        element: <ManageProductsPage />
      },
      {
        path: 'product/:id',
        element: <SingleProduct />
      },
      {
        path: "category/:category",
        element: <CategorySingle />
      },
      {
        path: '*',
        element: <ErrorPage />
      },
      {
        path: '/success',
        element: <SuccessPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
