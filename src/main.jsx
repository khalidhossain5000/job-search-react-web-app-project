import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'
import { ScaleLoader } from 'react-spinners'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<div className='flex items-center justify-center fixed inset-0 bg-white z-50'>
      <ScaleLoader
        color="#0d35ff"
        height={55}
        speedMultiplier={1}
      />
    </div>}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>
)
