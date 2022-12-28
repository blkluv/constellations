// layouts
import './App.css';
import Landing from './pages/Landing'
import Upload from './pages/Upload';
import VideoNFT from './pages/VideoNFT'

// react
import React from "react";

// router
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        {/* Landing */}
        <Route path="/" exact element={<Landing/>} />

        {/* Video NFT */}
        <Route path="/videoNFT" exact element={<VideoNFT/>} />

        {/* Upload */}
        <Route path="/upload" exact element={<Upload/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
