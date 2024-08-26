import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './componats/Home/home.jsx'
import About from './componats/About/about.jsx'
import Contact from './componats/contect/contact.jsx'
import Props from './componats/User/Props.jsx'
import Github, { githubInfoLoader } from './componats/Github/github.jsx'

// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<Props/>}/>
    <Route 
    loader={githubInfoLoader}
    path='Github' 
    element={<Github/>}
    />

    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
