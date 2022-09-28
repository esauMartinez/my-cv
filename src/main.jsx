import React from 'react'
import ReactDOM from 'react-dom/client'
import { CreateRoutes } from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'animate.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

root.render(
  <React.StrictMode>
      <CreateRoutes/>
  </React.StrictMode>
)
