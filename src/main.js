import React from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Conference_Ticket_Generator">
   
      <App />
    
    </BrowserRouter>
  </StrictMode>

)

