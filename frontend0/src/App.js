import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Mainpage from "./Components/Mainpage";
// import Card from "./Components/Card";
import Meditation from './Components/Meditation';
import VideoCall from './Components/VideoCall';
import RoomPage from './Components/RoomPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainpage" element={isLoggedIn ? <Mainpage /> : <Navigate to="/login" />} />
        <Route path="/meditation" element={<Meditation /> } />
        <Route path="/videocall" element={<VideoCall /> } />
        <Route path="/videocall/:id" element={<RoomPage /> } />
        
        {/* <Route path="/card" element={isLoggedIn ? <Card /> : <Navigate to="/login" />} /> */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
