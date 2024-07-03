import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './components/GlobalStyles/index.tsx'
import { PhotosContexProvider } from './context/photosContext.tsx'
import 'normalize.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <PhotosContexProvider>
      <App />
    </PhotosContexProvider>
  </React.StrictMode>,
)
