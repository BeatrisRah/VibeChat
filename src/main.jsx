import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import QuerytProvider from './providers/QueryProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QuerytProvider>
        <App />

      </QuerytProvider>
    </BrowserRouter>
  </StrictMode>,
)
