import React from 'react';
import Navbar from './components/Navbar';
import Profile from './pages/Profile'; // Import the Profile component
import Project from './pages/Project'; // Import the Project component
import Contact from './pages/Contact'; // Import the Contact component
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
