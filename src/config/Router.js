import React from 'react'; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Faqs from '../pages/faqs' 
import ProjectDetail from "../pages/projectDetails";
import LaunchPad from '../pages/launchPad';
import Staking from '../pages/staking';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="faqs" element={<Faqs />} /> 
        <Route index path="private-sale" element={<ProjectDetail />} />
        <Route index path="launchpad" element={<LaunchPad />} />
        <Route index path="staking" element={<Staking />} />
      </Routes>
    </BrowserRouter>
  );
}
