import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {ContextProvider} from "./ContextApi/CartContext.jsx"
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ContextProvider>
    <Layout/>
    </ContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
