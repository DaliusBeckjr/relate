import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Providers
import { AuthContextProvider } from './context/AuthContext.jsx'

// import { BlogsContextProvider } from './context/BlogContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
)
