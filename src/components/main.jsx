import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import store from '../store/index.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import emailjs from 'emailjs-com';

emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
