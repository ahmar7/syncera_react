import React from 'react'; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Faqs from '../pages/faqs'
import Projects from "../pages/projects";
import ProjectDetail from "../pages/ProjectDetail";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/faqs" element={<Faqs />} />
        <Route index path="projects" element={<Projects />} />
        <Route index path="private-sale" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
