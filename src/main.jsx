import React from 'react'
import ReactDOM from 'react-dom/client'

// ----- Esta es la app del contador -----
// import {CounterApp} from './CounterApp/CounterApp'
// import './CounterApp/counter.css'

// ----- Esta es la app de los gifs -----
import { GifExpertApp } from './GifExpertApp/GifExpertApp'
import './GifExpertApp/gifExpert.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
