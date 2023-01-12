// layouts
import './App.css';

// pages
import Landing from './pages/Landing'
import Upload from './pages/Upload';
import Home from './pages/Home'
import VideoContainer from './components/VideoComponent'

// react
import React, {useState, useEffect} from "react";

// router
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter className="App">
      <Routes>
        {/* Landing */}
        <Route path="/" exact element={<Landing/>} />
 
        {/* Home */}
        <Route path="/home" exact element={<Home/>} />

        {/* Video Selected */}
        <Route path="/home/:id" exact element={<VideoContainer/>} />
        
        {/* Upload */}
        <Route path="/upload" exact element={<Upload/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
