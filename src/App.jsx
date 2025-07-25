import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Techstack from './pages/Techstack'
import Projects from './pages/projects'
import Contact from './pages/contact'
import { motion } from "framer-motion";
import './index.css';



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='techstack' element={<Techstack />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contacts' element={<Contact />} />
      </Route>
    ),
    {
      basename: "/portfolio-site",
    }
  );
  return <RouterProvider router={router} />
}

export default App