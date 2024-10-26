import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConetxtProvider from './Component/Context.jsx'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
//  
//     <App />
//     </ConetxtProvider>

<BrowserRouter>
<ConetxtProvider>
<App />
</ConetxtProvider>
   
    </BrowserRouter>





)
