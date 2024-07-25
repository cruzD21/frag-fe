import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Fragrances from './pages/fragrances.tsx'
import Frag, {loader as fragLoader} from './pages/frag.tsx'
import Layout from './pages/Layout.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <App/>,
      },
      {
      
        path: '/fragrances',
        element: <Fragrances/>,
      },
      {
        path: '/fragrances/:fragID',
        loader: fragLoader,
        element: <Frag/>
      }
    ]
}
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
