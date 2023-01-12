// layouts
import './App.css';

// pages
import Landing from './pages/Landing'
import Upload from './pages/Upload';
import Home from './pages/Home'
import Explore from './pages/Explore';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
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

        {/* Explore */}
        <Route path="/explore" exact element={<Explore/>} />

        {/* Chat */}
        <Route path="/chat" exact element={<Chat/>} />

        {/* Profile */}
        <Route path="/profile" exact element={<Profile/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
