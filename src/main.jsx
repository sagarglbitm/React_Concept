import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConetxtProvider from './Component/Context.jsx'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { store } from './Component/Redux/store.js'
import{Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
//  
//     <App />
//     </ConetxtProvider>

<Provider store={store}>
<BrowserRouter>
<ConetxtProvider>
<App />
</ConetxtProvider>
   
    </BrowserRouter>
    </Provider>





)
