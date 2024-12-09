import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/index.tsx'
import "./i18n"

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routers}/>
)
