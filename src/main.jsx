import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/App.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Schedule from "./pages/Schedule.jsx";
import Drivers from './pages/Drivers.jsx';
import Teams from './pages/Teams.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Schedule" element={<Schedule/>}/>
        <Route path="/Teams" element={<Teams/>}/>
        <Route path="/Drivers" element={<Drivers/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
