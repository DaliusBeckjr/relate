import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { BlogsContextProvider } from './context/BlogContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BlogsContextProvider> */}
      <App />
    {/* </BlogsContextProvider> */}
  </StrictMode>,
)