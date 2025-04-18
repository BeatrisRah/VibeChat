import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import QuerytProvider from './providers/QueryProvider.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <QuerytProvider>
      <Provider store={store} >
        <App />

      </Provider>
      </QuerytProvider>
    </BrowserRouter>
  // </StrictMode>,
)
