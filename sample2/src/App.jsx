import React from 'react';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Project from './pages/Project'; 
import Contact from './pages/Contact'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
