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
import ExploreProfile from './pages/ExploreProfile';

// react
import React, {useState, useEffect} from "react";

// router
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// context providers:
import { WalletContextProvider } from "./utils/WalletContext";
import { XmtpContextProvider } from "./utils/XMTPContext";

function App() {
  
  return (
    <WalletContextProvider>
      <XmtpContextProvider>
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

            {/* Explore Profile */}
            <Route path="/explore/:id" exact element={<ExploreProfile/>} />
            
            {/* Chat */}
            <Route path="/chat" exact element={<Chat/>} />

            {/* Profile */}
            <Route path="/profile" exact element={<Profile/>} />
          </Routes>
        </BrowserRouter>
      </XmtpContextProvider>  
    </WalletContextProvider>
  );
}

export default App;
