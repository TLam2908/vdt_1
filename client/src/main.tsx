import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import ScrollToTopLayout from './scrollToTop.tsx'
import ProductPage from './pages/productPage.tsx'
import RegistrationPage from './pages/registrationPage.tsx'

const router = createBrowserRouter([
  {
    element: <ScrollToTopLayout />, // <- layout xử lý scroll
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/product/:productId',
        element: <ProductPage />,
      },
      {
        path: '/registration',
        element: <RegistrationPage />,
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
