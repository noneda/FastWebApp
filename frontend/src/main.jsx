import React from "react"
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'

import "./sass/base.scss"

import Router from './router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)
